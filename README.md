# ModularAdmin: Free Dashboard Theme <br/>  HTML version 

<a href="http://modularcode.github.io/modular-admin-html/" target="_blank">
 ![demo](http://modularcode.github.io/modular-admin-html/assets/demo.png)
</a>

<p align="center">
  <strong>
    <a href="http://modularcode.github.io/modular-admin-html/" target="_blank">View Demo</a> | <a href="https://github.com/modularcode/modular-admin-html/archive/master.zip" target="_blank">Download ZIP</a>
  </strong>
</p>

[ModularAdmin](http://modularcode.github.io/modular-admin-html/) is an open source dashboard theme
built in modular way. That makes it awesomely easy to scale, modify and maintain.

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

> The project is built by Gulp. You can read more info in [#build-tasks](**Build Tasks**) section

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
│   |   ├── editor/                    # whyiwyg editor files
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


## File Types

Our app consists of different file types.

#### Styles (*.scss)

We use [SASS](http://sass-lang.com/) as CSS preprocessor language. 
Main variables are defined in ```src/_variables.scss``` folder. 
For making life easier we broke down styles into components, and on build we're just merging all ```.scss``` files together and processing it to ```pubilc/css/app.css``` file. Style files are merged in following order

```
{variables.scss}
{bootstrap variables}
{bootstrap mixins}
{rest style files}
```
The rest style files are merged in alphabetical order depending on their deepth level.

There are also different theme variations located in ```src/_themes/``` folder, where you can overwrite main variables and get different themes. There are few predefined themes built in. You can add new theme by adding new file in ```src/_themes/``` folder. The file name should end with ```-theme.scss```.

#### Scripts (*.js)

#### Templates (*.hbs)

#### Pages (*-page.hbs)

#### Layouts (*-layout.hbs)

#### Contexts (_context.js)

## Build Tasks


## Get in touch

Usually we're discussing stuff [ModularCode Facebook Group](https://www.facebook.com/groups/710770032358423/).
Feel free to reach us for any questions, sugestions, remarks and potential feature requests.

Gevorg Harutyunyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAMAAA7ne4gBF-IVNsoiBaeOeDTd5YGSTVN2eBs) |  [Facebook](https://www.facebook.com/madextreme) | [Twitter](https://twitter.com/mad4extreme) | [gevharut@gmail.com](mailto:gevharut@gmail.com)

Aram Manukyan [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAABCehqwBm7aTR7IohpOidW1sVIHMo33U46o)

David Tigranyan [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAAAk1QJIB86I-V65l3qtgpTvfrMozBNc4p_8)
