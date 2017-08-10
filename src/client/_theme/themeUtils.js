const Color = require('color');

function getVariableValue(value) {
  let varValue = '';

  // Value is defined as color
  if (typeof value.string === 'function') {
    varValue = value.string();
  }
  // Value is defined as object, use SASS map
  else if (typeof value === 'object') {
    varValue = {};

    Object.keys(value).map(function(key) {
      varValue[key] = getVariableValue(value[key]);
    });

    return varValue;
  }
  // Values is defined as functions as well
  else if (typeof value === 'function') {
    // Execute function
    varValue = value();

    // Get value
    varValue = getVariableValue(varValue);
  }
  // Value is defined as string
  else {
    varValue = value;
  }

  return varValue;
}



function getColors(colorsObj, excludeShades) {
  let res = {};

  Object.keys(colorsObj).map(function(key, index) {

    let val = colorsObj[key];
    let keyKebab = toKebabCase(key);

    if (typeof val === 'string') {
      res[keyKebab] = Color(val);
    }
    else if (typeof val === 'object') {
      res[keyKebab] = Color(val[500]);

      if (excludeShades) {
        return;
      }

      Object.keys(val).map(function(shadeKey, index) {

        let shadeKeyKebab = toKebabCase(shadeKey);

        if (typeof val[shadeKey] === 'string') {
          res[keyKebab + '-' + shadeKeyKebab] = Color(val[shadeKey]);
        }
      });
    }
  });

  return res;
};


function toKebabCase(myStr) {
  return !myStr ? null : myStr.replace(/([A-Z])/g, function (g) { return '-' + g[0].toLowerCase() });
}


module.exports.toKebabCase = toKebabCase;

module.exports.getVariableValue = getVariableValue;

module.exports.getColors = getColors;


