# ModularAdmin: Free Dashboard Theme <br/>  HTML version

> [ModularAdmin](http://modularcode.github.io/ModularAdmin-free-dashboard-theme-html/) is an open source dashboard theme
> built in modular way. That makes it awesomely easy to scale, modify and maintain.

> This is the HTML version, which is great for enhancing and integrating it into other platforms and environments. 
> AngularJS, React and Meteor versions are coming soon.

Demo: http://modularcode.github.io/ModularAdmin-free-dashboard-theme-html/

## Getting Started

For assembling the application, you need to have [NodeJs](https://nodejs.org/en/) with npm.

Clone repository to local `modularity` folder
```
git clone https://github.com/ModularCode/ModularAdmin-free-dashboard-theme-html.git modularity -b master --single-branch 
```

Change to new folder
```
cd modularity
```

Install project dependencies 
```
npm install
```

Build the project and start local web server
```
npm start
```

Open the project [http://localhost:4000](http://localhost:4000).

> The project is built by Gulp. You can read more info in [#build-tasks](**Build Tasks**) section

## Folder Structure

```
├── bower_components/       
├── node_modules/                   
├── public/                  
├── src/    
│   ├── _assets/   
│   │   └── {application assets}
│   ├── _common/   
│   |   └── styles/
│   ├── _helpers/   
│   │   └── {handlebars helper files}
│   ├── _main/   
│   │   ├── config.js
│   │   ├── main.js
│   │   ├── main.less
│   │   └── variables.less
│   ├── _vendor/   
│   │   └── {manually downloaded vendor libs}
│   ├── app/   
│   │   ├── _common/
│   │   |   ├── header/
│   │   |   |   └── {header files}
│   │   |   ├── footer/
│   │   |   |   └── {footer files}
│   │   |   └── sidebar/
│   │   |       └── {sidebar files}
│   │   ├── {different modules}
│   │   ├── app-layout.hbs
│   │   └── app.less
│   ├── auth/   
│   │   ├── {different modules}
│   │   ├── auth-layout.hbs
│   │   └── auth.less
│   └── context.js
├── tasks/    
│── bowere.json
│── config.js
│── gulpfile.js
│── package.json
│── paths-app.js
└── paths-vendor.js
```

## File Types

#### Styles (*.less)

#### Scripts (*.js)

#### Layouts (*-layout.hbs)

#### Pages (*-page.hbs)

#### Templates (*.hbs)

#### Contexts (context.js)

## Build Tasks
 
