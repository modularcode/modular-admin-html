# Modular Admin: Free Bootstrap4 Dashboard Theme <br/>  HTML version

<a href="http://modularcode.github.io/modular-admin-html/" target="_blank">
 ![demo](http://modularcode.github.io/modular-admin-html/assets/demo.png)
</a>

<a href="http://modularcode.github.io/modular-admin-html/" target="_blank">
![HTML5 jQuery Bootstrap4 SASS Handlebars Gulp Bower](http://modularcode.github.io/modular-admin-html/assets/features.png)
</a>

<p align="center">
  <strong>
    <a href="http://modularcode.github.io/modular-admin-html/" target="_blank">View Demo</a> | <a href="https://github.com/modularcode/modular-admin-html/archive/master.zip" target="_blank">Download ZIP</a>
  </strong>
</p>
[ModularAdmin](http://modularcode.github.io/modular-admin-html/) is an open source dashboard theme
built in modular way. That makes it awesomely easy to scale, modify and maintain.
### Main features

* HTML5 + CSS3 with FlexBox
* jQuery
* Bootstrap4 
* SASS
* Hanldebars with layouts
* Gulp 
* Bower

### Other versions

This is the HTML version, which is great for enhancing and integrating it into other platforms and environments. 
AngularJS, Angular2, React and Meteor versions are coming soon.

### Table of contents

  * [Browser support](#browser-support)
  * [Getting started](#getting-started)
  * [Folder structure](#folder-structure)
  * [File types](#file-types)
  * [Build tasks](#build-tasks)
  * [Get in touch](#get-in-touch)

-------

## Browser support

* Last 2 Versions FF, Chrome, IE 10+, Safari Mac
* IE 10+
* Android 4.4+, Chrome for Android 44+
* iOS Safari 7+

Some of the components use new Flexbox Layout module which is available in modern browsers. Bootstrap4 is used as main fraimwork. 
Please make sure if that's suitable for you [Flexbox browser support](http://caniuse.com/#feat=flexbox).

## Getting Started

For assembling the application, you need to have [NodeJs](https://nodejs.org/en/) with npm. You also need to have Bower installed globally.

```
npm install -g bower
```

Clone repository to local `modular-admin` folder
```
git clone git@github.com:modularcode/modular-admin-html.git modular-admin
```

Change to new folder
```
cd modular-admin
```

Install npm dependencies 
```
npm install
```

Install front-end bower dependencies 
```
bower install
```

Build the project and start local web server
```
npm start
```

Open the project [http://localhost:4000](http://localhost:4000).

> The project is built by Gulp. You can read more info in [Build Tasks](#build-tasks) section

## Folder Structure

```
├── bower_components/       # vendor libraries installed by bower
├── build/                  # app build tasks and tools
├── node_modules/           # node dependencies        
├── public/                 # compiled result
├── src/                    # source files
│── bowere.json             # bower configuration file
└── package.json            # npm configuration file
```

#### ```src/``` folder

In this folder are our application source files located. 
The folder structure represents app component structure.

Each non-underscored folder represents a single component module. Modules can be nested inside each other.

There are also special folders which start with underscore. 
For example ```_common/``` folder contains common components that are used by other components at the same lavel.

This file structuring makes our app file organization very semantic and scalable. Also It's very easy to work on separate components even if we're developing large-scale application.

```
├── _assets/                           # application assets
├── _common/                           # common components
|   ├── helpers/                       # handlebars helpers
|   └── styles/                        # application common styles
├── _themes/                           # different theming versions
├── app/                               # app module (dashboard view)
│   ├── _common/                       # app common components
│   |   ├── editor/                    # wysiwyg editor files
│   |   ├── footer/                    # footer files
│   |   ├── header/                    # header files
│   |   ├── modals/                    # common modal dialogs (confirm, image library, etc)
│   |   └── sidebar/                   # sidebar files
│   ├── {different modules}
│   ├── app-layout.hbs                 # app view layout
│   └── app.scss                       # main app view styles
├── auth/                              # auth module (login/signup/recover)
│   ├── {different modules}
│   ├── auth-layout.hbs                # auth view layout
│   └── auth.scss                      # main auth view styles
├── _context.js                        # main handlebars variables
├── _main.scss                         # main styles
├── _variables.scss                    # variables
├── config.js                          # javascript configs
└── main.js                            # main script file

```

#### ```build/``` folder

In this folder are located files related to our application building. That can be stype preprocessors and template engine compilation, script files concatenation and minification and other related tasks.

```
├── paths/                           # application file paths
|   ├── app.js                       # application file paths
|   └── vendor.js                    # 3-rd party plugins paths
├── tasks/                           # tasks folder
|   └── {different tasks}            # each file represents a single build task
├── utils/                           # some utils
├── config.js                        # build configs
└── gulpfile.js                      # main build file for gulp build system

```

#### ```dist/``` folder

Compiled state of our app with processed styles, templates, scripts and assets.

**Warning! Never work inside this folder, because your changes would be overwritten on every build**
pu

## File Types

Our app consists of different file types.

#### Styles (*.scss)

We use [SASS](http://sass-lang.com/) as CSS preprocessor language. 
Main variables are defined in ```src/_variables.scss``` folder. 
For making life easier we broke down styles into components, and on build we're just merging all ```.scss``` files together and processing it to ```dist/css/app.css``` file. Style files are merged in following order

```
{variables.scss}
{bootstrap variables}
{bootstrap mixins}
{rest style files}
```
The rest style files are merged in alphabetical order depending on their deepth level.

There are also different theme variations located in ```src/_themes/``` folder, where you can overwrite main variables and get different themes. There are few predefined themes built in. You can add new theme by adding new file in ```src/_themes/``` folder. The file name should end with ```-theme.scss```.

#### Scripts (*.js)

We separate application's scripts across it's components. For simplicity we use ES5 in this version and just wrap each component's script in  jQuery ```$(function() { })```. JS configurations are defined in ```src/config.js``` file. On build application script files are merged together and copied to ```dist/js/app.js``` fole. Script files are merged in following order

```
{config.js}
{all .js files except main.js}
{main.js}
```

#### Templates (*.hbs)

Templates are pieces of HTML files written in template engine language. We use [Handlebars](http://handlebarsjs.com/), which allows to have conditions in HTML, reuse partials in different pages (e.g. sidebars, footers), use loops, layouts etc. 

#### Pages (*-page.hbs)

Templates themselves are just parts of markup, and aren't compiled as separate files. What we really want in final output is ```.html``` page in ```dist/``` folder. For that reason there are special handlebar templates which filenames end with ```-page.hbs```. Each ```{pagename}-page.hbs``` file would be compiled to ```dist/{pagename}.html``` page with flatened file structure.

Pages can consist of different templates (partials) which can be included thanks to handlebars partial including. Also each page have it's context which is data passed into template on rendering. That data is used in template expressions and variables. page contexts can be defined in two ways: 

**YAML** headers ([example](https://github.com/modularcode/modular-admin-html/blob/master/src/app/dashboard/index-page.hbs))

```
---
foo: bar
list: 
  - One
  - Two
  - Three
---
```
and **_context.js** files.
```
module.exports = {
  foo: 'bar',
  foo2: function() {
    // do some magic, return some string
  },
  list: [
    'One', 'Two', 'Three'
  ]
}
```

The final result of page context is compination of both ways. Moreover, different depth level _context.js files are extending each other and then are extended with YAML headers data. For simplicity we use only **YAML** headers.

#### Layouts (*-layout.hbs)

If different pages have lot of common components like sidebar, header, footer, It's a good idea to define a layout for those common pages and define in page files only the content which is unique. 

Layout is a page content wrapper. If the page has layout in output we'll get page's content inserted into layout. Layouts should have ```{{{body}}}``` handlebars tag, which is entry point for page content. ([example](https://github.com/modularcode/modular-admin-html/blob/master/src/app/app-layout.hbs))

To define a page layout you need to specify page file context's ```layout``` variable. It can be done both by YAML header or _context.js file. ([example](https://github.com/modularcode/modular-admin-html/blob/master/src/app/forms/forms-page.hbs)).

Layouts can also have contexts and parent layouts.

```
{_main-layout.hbs}                  # main layout with doctype, head, scripts declaration
    {app/app-layout.hbs}            # dashboard layout with sidebar, header and footer
      {app/forms/forms-page.hbs}    # any dashboard page
```


If you need more advanced layouting with multiple content blocks at the same time you can use [handlebar-layouts](https://www.npmjs.com/package/handlebars-layouts) helper approach, which is also available out of the box.

#### Vendor files

Except application files there are also third party plugin files (e.g. Bootstrap). They are managed by using [Bower](http://bower.io/). Usually vendor libraries consist from scripts, styles and assets (images, fonts). The build system will concatenate and copy all script and style files correspondingally to ```dist/js/vendor.js```and ```dist/css/vendor.css``` also will copy all assets to ```dist/assets/``` folder.

## Build Tasks


## Get in touch

Usually we're discussing stuff in [ModularCode Facebook Group](https://www.facebook.com/groups/710770032358423/).
Feel free to reach us for any questions, sugestions, remarks and potential feature requests.

* Gevorg Harutyunyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAMAAA7ne4gBF-IVNsoiBaeOeDTd5YGSTVN2eBs) |  [Facebook](https://www.facebook.com/madextreme) | [Twitter](https://twitter.com/mad4extreme) | [gevharut@gmail.com](mailto:gevharut@gmail.com)
* Aram Manukyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAABCehqwBm7aTR7IohpOidW1sVIHMo33U46o)
* David Tigranyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAAAk1QJIB86I-V65l3qtgpTvfrMozBNc4p_8)

## Hire Us

You have a great project? Need theme customization or intagration with back-end? Want to create something awesome?
We may be available for hire. Just drop a message to [gevharut@gmail.com](mailto:gevharut@gmail.com) and let's talk.
