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
    const varName = key;
    const varValue = getVariableValue(key);
    const cssRule = `--${varName}: ${varValue};`;

    CSS = CSS + cssRule;
  });

  return CSS;
}

function toSCSS() {

  let SCSS = '';

  Object.keys(variables).map(function(key) {
    const varName = key;
    const varValue = getVariableValue(key);

    if (varName === 'SidebarBgImage') {
      console.log(varValue);
    }

    const sassRule = `$${varName}: ${varValue} !default;`;

    SCSS = SCSS + sassRule;
  });

  return SCSS;
}

function toObject() {
  let res = {};

  Object.keys(variables).map(function(key) {
    const varName = key;
    const varValue = getVariableValue(key);

    res[varName] = varValue;
  });

  return res;
}

function getVariableValue(key) {
  let varValue = '';

  // Value is defined as color
  if (typeof variables[key].string === 'function') {
    varValue = variables[key].string();
  }
  // Values is defined as functions as well
  else if (typeof variables[key] === 'function') {
    varValue = variables[key]();

    // Function return value is Color
    if (
      typeof varValue !== 'string' &&
      typeof varValue.string === 'function'
    ) {
      varValue = varValue.string();
    }
  }
  // Value is defined as string
  else {
    varValue = variables[key];
  }

  return varValue;
}


module.exports = theme;
