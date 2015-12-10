# ModularAdmin: Free Dashboard Theme <br/>  HTML version 

> [ModularAdmin](http://modularcode.github.io/modular-admin-html/) is an open source dashboard theme
> built in modular way. That makes it awesomely easy to scale, modify and maintain.

> This is the HTML version, which is great for enhancing and integrating it into other platforms and environments. 
> AngularJS, React and Meteor versions are coming soon.

<a href="http://modularcode.github.io/modular-admin-html/" target="_blank">
 ![demo](http://modularcode.github.io/modular-admin-html/assets/demo.png)
</a>

Demo: http://modularcode.github.io/modular-admin-html/

## Getting Started

For assembling the application, you need to have [NodeJs](https://nodejs.org/en/) with npm. You also need to have Bower installed globally.

```
npm install -g bower
```

Clone repository to local `modular-admin` folder
```
git clone git@github.com:modularcode/modular-admin-html.git modular-admin -b master --single-branch 
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

```src/``` folder

```
├── _assets/                           # application assets
├── _common/                           # common components
|   ├── helpers/                       # handlebars helpers
|   └── styles/                        # application common styles
├── _themes/                           # different theming versions
├── app/                               # app module (dashboard view)
│   ├── _common/                       # app common components
│   |   ├── header/                    # header files
│   |   ├── footer/                    # footer files
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

```build/``` folder

@ToDo


## File Types

#### Styles (*.scss)

#### Scripts (*.js)

#### Layouts (*-layout.hbs)

#### Pages (*-page.hbs)

#### Templates (*.hbs)

#### Contexts (_context.js)

## Build Tasks


## Get in touch

Usually we're discussing stuff [ModularCode Facebook Group](https://www.facebook.com/groups/710770032358423/).
Feel free to reach us for any questions, sugestions, remarks and potential feature requests.

Gevorg Harutyunyan | [LinkedIn](https://www.linkedin.com/profile/view?id=AAMAAA7ne4gBF-IVNsoiBaeOeDTd5YGSTVN2eBs) |  [Facebook](https://www.facebook.com/madextreme) | [Twitter](https://twitter.com/mad4extreme) | [gevharut@gmail.com](mailto:gevharut@gmail.com)

Aram Manukyan [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAABCehqwBm7aTR7IohpOidW1sVIHMo33U46o)

David Tigranyan [LinkedIn](https://www.linkedin.com/profile/view?id=AAkAAAk1QJIB86I-V65l3qtgpTvfrMozBNc4p_8)
