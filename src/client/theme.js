const Color = require('color');

let variables = {

  /*----------  Colors palette  ----------*/

  'colorBblue':  Color('#007bff'),
  'indigo':      Color('#6610f2'),
  'purple':      Color('#6f42c1'),
  'pink':        Color('#e83e8c'),
  'red':         Color('#dc3545'),
  'orange':      Color('#fd7e14'),
  'yellow':      Color('#ffc107'),
  'green':       Color('#28a745'),
  'teal':        Color('#20c997'),
  'cyan':        Color('#17a2b8'),

  /*----------  Main Colors  ----------*/

  'colorPrimary':   Color('#28a745'),
  'colorPrimary-light': function() {
    return this['colorPrimary'].lighten(0.1);
  },
  'colorPrimary-lighter':  function() {
    return this['colorPrimary'].lighten(0.15);
  },
  'colorPrimary-dark':     function() {
    return this['colorPrimary'].darken(0.1);
  },
  'colorPrimary-darker':   function() {
    return this['colorPrimary'].darken(0.15);
  },
  'colorSecondary': Color('#868e96'),

  'colorText':             Color('#4f5f6f'),
  'colorText-light':       Color('#7e8e9f'),
  'colorText-muted':       Color('#C2CCD6'),
  'colorText-inverse':     Color('#ffffff'),
  'colorText-passive':     Color('#c5c5c5'),

  'colorDivider':          Color('#d7dde4'),

  /*----------  Options  ----------*/



  /*----------  Components  ----------*/

  // App
  'AppColorBg': Color('#f0f3f6'),
  'AppHeaderHeight': '70px',
  'AppHeaderHeight-xs': '50px',
  'AppSidebarWidth': '230px',
  'AppFooterHeight': '50px',
  'AppLayoutTransitionDuration': '.3s',

  // Header
  'HeaderColorBg': Color('#fff'),
  'HeaderShadow': '0px 0px 11px rgba(102, 102, 102, 0.05)',
  'HeaderBorderBottom': '1px solid #e0e0e0',

  // Footer
  'FooterColorBg': Color('#fff'),
  'FooterShadow': 'none',

  // Sidebar
  'SidebarColorBg':   Color('#4f5f6f').darken(0.1),
  'SidebarColorText': function() {
    return this['colorText-inverse'].fade(0.2);
  },
  'SidebarShadow': '0px 0px 30px rgba(72, 72, 72, 0.5)',

  // Sidebar Nav
  // 'SidebarNavColorText': 'fade-out('colorText-inverse, 0.5)',
  // 'SidebarNavColorText-active': ''colorText-inverse',
  // 'SidebarNavColorBg': ''SidebarColorBg',
  // 'SidebarNavColorBg-active': 'darken('SidebarColorBg, 6%)',

  // Page
  'PagePaddingVertical-xl': '35px',
  'PagePaddingHorizontal-xl': '40px',

  'PagePaddingVertical-lg': '30px',
  'PagePaddingHorizontal-lg': '35px',

  'PagePaddingVertical-md': '25px',
  'PagePaddingHorizontal-md': '20px',

  'PagePaddingVertical-sm': '20px',
  'PagePaddingHorizontal-sm': '20px',

  'PagePaddingVertical-xs': '15px',
  'PagePaddingHorizontal-xs': '10px',

  // Card
  'CardMarginBottom': '10px',
  'CardColorBg': 'rgba(255,255,255,0.94)',
  'CardShadow': '1px 1px 5px rgba(126, 142, 159, 0.1)',

  'CardBlockPaddingHorizontal': '15px',
  'CardBlockPaddingHorizontal-xl': '20px',
  'CardBlockPaddingHorizontal-sm': '10px',
};

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
