# Modularity: Free Admin Dashboard Theme <br/>  HTML version

> [Modularity](http://modularcode.github.io/modularity-free-admin-dashboard-theme-html/) is an open source admin theme
> built in modular way. That makes it awesomely easy to scale, modify and maintain.

> This is the HTML version, which is great for enhancing and integrating it into other platforms and environments. 
> AngularJS, React and Meteor versions are coming soon.

Demo: http://modularcode.github.io/modularity-free-admin-dashboard-theme-html/

## Getting Started

For assembling the application, you need to have [NodeJs](https://nodejs.org/en/) with npm.

Clone repository to local `modularity` folder
```
git clone https://github.com/ModularCode/modularity-free-admin-dashboard-theme-html.git modularity -b master --single-branch 
```

Change to new folder
```
cd modularity
```

Install [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) globally
```
npm install -g gulp bower
```

Install dependencies 
```
npm install
```

Build the project and start local web server
```
gulp
```

Open the project [http://localhost:4000](http://localhost:4000)


## Folder Structure

```
├── bower_components/       
├── node_modules/                   
├── public/                  
├── src/    
│   ├── _assets/   
│   ├── _common/   
│   ├── _helpers/   
│   ├── _main/   
│   ├── _vendor/   
│   ├── app/   
│   ├── auth/   
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
