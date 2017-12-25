const themeUtils = require('./utils');

let variables = require('./variables');


const theme = {
  on,
  get,
  set,
  extend,
  toCSS,
  toSCSS,
  toObject,
};

/*----------  Function Definitions  ----------*/

function on(event, callback) {
  return {
    event, callback
  };
}

function get() {
  return variables;
}

function set() {
  if (arguments.length === 1) {
    variables = arguments[0];
  }
  // .set('Something', 'value')
  else if (arguments.length > 1) {
    const key = arguments[0];
    const value = arguments[1];

    variables[key] = value;
  }
}

function extend(value) {
  variables = Object.assign(variables, value);
}


function toCSS() {

  let CSS = '';

  Object.keys(variables).map(function(key) {
    let varName = key;
    let varValue = themeUtils.getVariableValue(variables[key]);

    let cssRule;

    if (typeof varValue === 'object') {
      cssRule = '';
    }
    else {
      cssRule = `--${varName}: ${varValue};`;
    }

    CSS = CSS + cssRule;
  });

  return CSS;
}

function toSCSS() {

  let SCSS = '';

  Object.keys(variables).map(function(key) {
    let varName = key;
    let varValue = themeUtils.getVariableValue(variables[key]);

    let sassRule;

    // Use sass map
    if (typeof varValue === 'object') {
      varValue = JSON.stringify(varValue)
        .replace(/"/g, '')
        .replace(/{/g, '(')
        .replace(/}/g, ')');
    }

    sassRule = `$${varName}: ${varValue};`;

    SCSS = SCSS + sassRule;
  });

  return SCSS;
}

function toObject() {
  let res = {};

  Object.keys(variables).map(function(key) {
    const varName = key;
    const varValue = themeUtils.getVariableValue(variables[key]);

    res[varName] = varValue;
  });

  return res;
}


module.exports = theme;
