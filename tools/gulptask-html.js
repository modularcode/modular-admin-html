const gulp  = require('gulp');
const plugins = require('gulp-load-plugins')();

const path  = require('path');
const glob  = require('glob');
const fs    = require('fs-extra');
const through = require('through2');
const File = require('vinyl');
const StringDecoder = require('string_decoder').StringDecoder;
const extend  = require('util')._extend;
const dotenv = require('dotenv');

const frontMatter = require('front-matter');
const handlebars = require('handlebars');
const handlebarsRegistrar = require('handlebars-registrar');

const config  = require('../config');
const paths = require('./_paths');
const partials = {};

module.exports = function() {


  // Register handlebars engine helpers and partials
  handlebarsRegistrar(handlebars, {
    helpers: paths.helpers,
    partials: paths.partials,
    parsePartialName: function (partial) {

      // Save in partials vinyl registry
      partials[partial.shortPath] = new File({
        cwd: partial.cwd,
        path: partial.path,
        base: path.basename(partial.path),
        contents: fs.readFileSync(partial.path)
      });

      return partial.shortPath;
    },
    bustCache: true,
  });


  return gulp.src(paths.pages)
    // Render pages
    .pipe(through.obj(function (file, enc, cb) {
      file.contents = new Buffer(renderTemplate(file));

      this.push(file);
      cb();
    }))
    // Handle errors
    .on('error', plugins.util.log)

    // Rename .page.hbs to .html
    // Rename main page to index
    .pipe(plugins.rename(function (path) {
      path.basename = path.basename.replace(".page", "");
      path.basename = path.basename.replace(
        new RegExp(`^${paths.mainPage}$`),
        "index"
      );

      path.extname = ".html"
    }))

    // Flatten structure
    .pipe(plugins.flatten())

    // pretify html structure
    .pipe(plugins.prettify({
      indent_size: 2
    }))

    // Output
    .pipe(gulp.dest(config.DIST_DIR));

};


/********************************************
*       Utils
*********************************************/

function renderTemplate(file, options) {

  options = options || {};

  // Set file frontMatter
  file = setFrontMatter(file);

  // Get context from _context.js files and frontmatter
  const contextExternal = getPageContextExternal(file);

  // Frontmatter context
  const contextTemplate = file.frontMatter || {};

  // Inherited context from child
  const contextInherited = options.contextInherited || {};

  // Result context
  const context = Object.assign({}, contextExternal, contextTemplate, contextInherited);

  // Page render result
  let pageRes = "";

  // Compile template
  const template = handlebars.compile(String(file.contents));
  const templateRes = template(context);

  // Layout processing
  const layout = context.layout || null;

  // If the layout exists, render it with template inside
  if (layout && partials[layout] && handlebars.partials[layout]) {

    // New instance of context
    let layoutData = Object.assign({}, context);

    // Add body to context
    layoutData = Object.assign(layoutData, {
      body: templateRes
    });

    // Remove layout parameter from inhereted context
    delete layoutData.layout;

    // New vinyl file based on partail vinyl
    const layoutFile = new File(partials[layout]);

    // Call recursively render template again
    pageRes = renderTemplate(layoutFile, {
      contextInherited: layoutData
    });
  }
  // Return rendered template
  else {
    pageRes = templateRes;
  }

  return pageRes;
}


/*
  Frontmatter file
*/
function setFrontMatter(file) {
  // Read content from front matter
  const content = frontMatter(file.contents.toString('utf8'));

  // var res = new Buffer(content.body);
  file.contents = new Buffer(content.body);
  file.frontMatter = content.attributes;

  return file;
}


/*
  This function returns context of current page
  which is root context extended by all contexts untill
  current level context

  You may also use .env file in root folder
*/


function getPageContextExternal(file) {

  // Initial context
  let context = {};

  // Environmental variables
  env = dotenv.config({
    silent: true,
    path: path.resolve(config.ROOT_DIR, '.env')
  });

  //
  Object.assign(context, env);

  // Package data
  context.pkg = require('../package.json');

  var rootDir = path.resolve(config.CLIENT_DIR);
  var pageDir = path.dirname(file.path);

  var contextPaths = [];

  // Start going up from page directory until root directory
  for (var activeDir = pageDir; activeDir.length >= rootDir.length; activeDir = path.resolve(activeDir, '../') ) {
    contextPaths.push(
      path.resolve(activeDir, '_context.js')
    );
  }

  // Reverse context, so the iteration will start from root level context
  contextPaths.reverse();


  contextPaths.map(function(filePath) {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    var localContext = require(filePath);

    extend(context, localContext);
  });


  return context;
};
