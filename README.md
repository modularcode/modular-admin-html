# ModularAdmin: Free Bootstrap 4 Dashboard Theme <br> HTML version

[![Backers on Open Collective](https://opencollective.com/modular-admin/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/modular-admin/sponsors/badge.svg)](#sponsors) [![Join the chat at https://gitter.im/modularcode/modular-admin](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/modularcode/modular-admin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![demo](http://modularcode.github.io/modular-admin-html/assets/demo.png)](http://modularcode.github.io/modular-admin-html/)

<p align="center">
  <strong>
    <a href="http://modularcode.github.io/modular-admin-html/" target="_blank">View Demo</a> | <a href="https://github.com/modularcode/modular-admin-html/releases" target="_blank">Download ZIP</a>
  </strong>
</p>

ModularAdmin is an open source **dashboard theme** built in a modular way. That makes it easy to scale, modify and maintain.

---

##  📣 Heads up for the Modular Material Admin + React! 

Currently I work on the <a href="https://github.com/modularcode/modular-material-admin-react" target="_blank">Modular Material Admin ReactJS</a> version, which uses **React**,  **MaterialUI**, **Redux** and **TypeScript**. [**🎖 Star**](https://github.com/modularcode/modular-material-admin-react/stargazers) the project or [**👣 follow me on Twitter**](https://twitter.com/modularcoder) to stay up to date!

**👉 [Support me on pateron](https://www.patreon.com/modularcoder) to make this happen! 👍**

---


## Getting Started

> **Note:** If you don't want to re-build the project, you may just clone this branch directly  ```https://github.com/modularcode/modular-admin-html/tree/gh-pages```

### 1. [Download ZIP](https://github.com/modularcode/modular-admin-html/releases/latest) or Git Clone

```
git clone https://github.com/modularcode/modular-admin-html.git
```
### 2. Build the project

The cloned/downloaded repository doesn't contain prebuilt version of the project and you need to build it. You need to have [NodeJs](https://nodejs.org/en/) (v8+) with npm (v3+) installed.


Install npm dependencies 
```
npm install
```

Build the project and start local web server
```
npm start
```

Open the project [http://localhost:4000](http://localhost:4000).


**Warning!** all changes made in ```dist/``` folder would be overwriten on application build.

<br>

You can also <strong>[run the project in docker](#running-in-docker)</strong> thanks to @japrogramer

<br>

## Folder Structure

```
├── build/               # app build tasks and tools
├── config/              # build configs and paths definitions
├── dist/                # compiled result
├── node_modules/        # node dependencies        
├── src/                 # source files
└── package.json         # npm configuration file
```

#### ```config/``` folder

This folder contains application build configurations and paths definitions.
For **adding/removing NPM dependencies** you need to **manually define the paths** in `config/index.js` file after the module installation.

#### ```build/``` folder

This folder contains files related to our application compilation. That can be styles preprocessing (LESS,SASS,PostCSS) and template engine compilation, script file concatenation and minification and other related tasks.

```
├── tasks/                           # tasks folder
|   └── {different tasks}            # each file represents a single build task
├── utils/                           # some utils
└── gulpfile.js                      # main build file for gulp build system

```


#### ```src/``` folder

This folder contains our application source files. 
The folder structure reflects the app component structure.


Each non-underscored folder represents a single component module. Modules can be nested inside each other.

There are also special folders which start with an underscore. 
For example ```_common/``` folder contains common components that are used by other components at the same level.

This file structuring makes our app file organization very semantic and scalable. Also It's very easy to work on separate components even if you're developing large-scale applications.

```
├── _assets/                           # application assets
├── _common/                           # common components
|   ├── helpers/                       # handlebars helpers
|   └── styles/                        # application common styles
├── _themes/                           # different theme versions
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



#### ```dist/``` folder

Compiled state of our app with processed styles, templates, scripts and assets.

**Warning! Never work inside this folder, because your changes would be overwritten on every build**

<br>

## File Types

Our app consists of different file types.

#### Styles (*.scss)

We use [SASS](http://sass-lang.com/) as CSS preprocessor language. 
Main variables are defined in ```src/_variables.scss``` folder. 
For making life easier we broke down styles into components, and on build we're just merging all ```.scss``` files together and processing it to ```dist/css/app.css``` file. Style files are merged in the following order

```
{variables.scss}
{bootstrap variables}
{bootstrap mixins}
{rest style files}
```
The remaining style files are merged in the alphabetical order.

There are also different theme variations located in ```src/_themes/ folder```, where you can change the main variables to get different themes. There are a few predefined themes built in. You can add new themes by adding a new file in ```src/_themes/``` folder. The file name must end with ```-theme.scss```.

#### Scripts (*.js)

We separate application's scripts across its components. For simplicity we use ES5 in this version, and just wrap each component's script in jQuery ```$(function() { })```. JS configurations are defined in ```src/config.js``` file. On build, application script files are merged together and copied to ```dist/js/app.js``` folder. The script files are merged in the following order.

```
{config.js}
{all .js files except main.js}
{main.js}
```

#### Templates (*.hbs)

Templates are pieces of HTML files written in template engine language. We use [Handlebars](http://handlebarsjs.com/), which allows to have conditions in HTML, reuse partials in different pages (e.g. sidebars, footers), use loops, layouts etc.

#### Pages (*-page.hbs)

Templates themselves are just parts of the markup, and aren't compiled as separate files. What we really want in the final output is a ```.html``` page in the ```dist/``` folder. There are special handlebar templates for it, their filenames ending with ```-page.hbs```. Each ```{pagename}-page.hbs``` file would be compiled to ```dist/{pagename}.html``` page with a flatened file structure.

Pages can consist of different templates (partials) which can be included thanks to handlebars partial including feature. Also each page has its context, which is a data passed into the template on rendering. That data is used in template expressions and variables. page contexts can be defined in two ways:

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

The final result of page context is a combination of both ways. Moreover, different depth level _context.js files are extending each other and then are extended with YAML headers data. For simplicity we use only **YAML** headers.

#### Layouts (*-layout.hbs)

If different pages have a lot of common components like sidebars, headers, footers, then it's a good idea to define a layout for those common pages, and define in page files only the content which is unique.

Layout is a page content wrapper. If the page has a layout in output we'll get page's content inserted into the layout. Layouts should have ```{{{body}}}``` handlebars tag, which is entry point for the page content. ([example](https://github.com/modularcode/modular-admin-html/blob/master/src/app/app-layout.hbs))

To define a page layout you need to specify page file context's ```layout``` variable. It can be done both with a YAML header or a _context.js file. ([example](https://github.com/modularcode/modular-admin-html/blob/master/src/app/forms/forms-page.hbs)).

Layouts can also have contexts and parent layouts.

```
{_main-layout.hbs}                  # main layout with doctype, head, scripts declaration
    {app/app-layout.hbs}            # dashboard layout with sidebar, header and footer
        {app/forms/forms-page.hbs}  # any dashboard page
```


If you need more advanced layouting with multiple content blocks at the same time you can use [handlebar-layouts](https://www.npmjs.com/package/handlebars-layouts) helper approach, which is also available out of the box.

<br>

## Running in Docker

You can run the project in docker. To build the container, you need to install docker and docker-compose than launch the docker daemon. After launching the daemon run the following commands from the project folder:

Build the image
```
docker-compose build
```

Launch the container
```
docker-compose up
```


## Support me!

### [Support me on Patreon](https://www.patreon.com/modularcoder)

Creating a good quality project takes a lot's of time, so any help is really appreciated!

[https://www.patreon.com/modularcoder](https://www.patreon.com/modularcoder)

### Contribute

Be part of our team! Feel free to open new issues/pull-requests.

### Get in touch

You can get in touch with us in gitter chat [![Join the chat at https://gitter.im/modularcode/modular-admin](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/modularcode/modular-admin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) or in the [ModularCode Facebook Group](https://www.facebook.com/groups/710770032358423/). 
Feel free to contact us with any questions, sugestions, remarks and potential feature requests that you might have.

* Gevorg Harutyunyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAMAAA7ne4gBF-IVNsoiBaeOeDTd5YGSTVN2eBs) |  [Facebook](https://www.facebook.com/madextreme) | [Twitter](https://twitter.com/mad4extreme) | gevharut[at]gmail.com



### Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/modular-admin#backer)]

<a href="https://opencollective.com/modular-admin/backer/0/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/1/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/2/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/3/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/4/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/5/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/6/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/7/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/8/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/9/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/10/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/11/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/12/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/13/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/14/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/15/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/16/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/17/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/18/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/19/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/20/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/21/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/22/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/23/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/24/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/25/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/26/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/27/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/28/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/backer/29/website" target="_blank"><img src="https://opencollective.com/modular-admin/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/modular-admin#sponsor)]

<a href="https://opencollective.com/modular-admin/sponsor/0/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/1/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/2/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/3/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/4/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/5/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/6/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/7/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/8/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/modular-admin/sponsor/9/website" target="_blank"><img src="https://opencollective.com/modular-admin/sponsor/9/avatar.svg"></a>

### Credits

* Gevorg Harutyunyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAMAAA7ne4gBF-IVNsoiBaeOeDTd5YGSTVN2eBs) |  [Facebook](https://www.facebook.com/madextreme) | [Twitter](https://twitter.com/mad4extreme) | gevharut[at]gmail.com
* Aram Manukyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAABCehqwBm7aTR7IohpOidW1sVIHMo33U46o)
* David Tigranyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAAAk1QJIB86I-V65l3qtgpTvfrMozBNc4p_8)
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Add a gray background color and some padding to the footer */
    footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
  </style>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Portfolio</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="jumbotron">
  <div class="container text-center">
    <h1>My Portfolio</h1>      
    <p>Some text that represents "Me"...</p>
  </div>
</div>
  
<div class="container-fluid bg-3 text-center">    
  <h3>Some of my Work</h3><br>
  <div class="row">
    <div class="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
  </div>
</div><br>

<div class="container-fluid bg-3 text-center">    
  <div class="row">
    <div class="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
    <div class="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
    </div>
  </div>
</div><br><br>

<footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer>

</body>
</html>
