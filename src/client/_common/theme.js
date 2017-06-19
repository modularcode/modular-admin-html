const Color = require('color');
const theme = {};

theme.JS = {

  /*----------  Main Colors  ----------*/

  'colorPrimary':   Color('#85CE36'),
  'colorPrimary1':  Color('#85CE36'),
  'colorPrimary2':  Color('#85CE36'),
  'colorPrimary3':  Color('#85CE36'),
  'colorPrimary4':  Color('#85CE36'),

  'colorPrimary-light':    Color('#85CE36'),
  'colorPrimary-lighter':  Color('#85CE36'),
  'colorPrimary-dark':     Color('#85CE36'),
  'colorPrimary-darker':   Color('#85CE36'),

  'colorText':             Color('#4f5f6f'),
  'colorText-light':       Color('#7e8e9f'),
  'colorText-muted':       Color('#C2CCD6'),
  'colorText-inverse':     Color('#ffffff'),
  'colorText-passive':     Color('#c5c5c5'),

  'colorDivider':          Color('#d7dde4'),

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

// Generate CSS and SCSS variables strings
theme.CSS = '';
theme.SCSS = '';
theme.COMPUTED = {};

Object.keys(theme.JS).map(function(key, index) {
  let varName = key;
  let varValue = '';

  // Value is defined as color
  if (typeof theme.JS[key].string === "function") {
    varValue = theme.JS[key].string();
  }
  // Values is defined as functions as well
  else if (typeof theme.JS[key] === "function") {
    varValue = theme.JS[key]();

    // Function return value is Color
    if (
      typeof varValue !== "string" &&
      typeof varValue.string === "function"
    ) {
        varValue = varValue.string();
    }
  }
  // Value is defined as string
  else {
    varValue = theme.JS[key];
  }

  const cssRule = `--${varName}: ${varValue};`;
  const sassRule = `$${varName}: ${varValue} !default;`;

  theme.CSS = theme.CSS + cssRule;
  theme.SCSS = theme.SCSS + sassRule;
  theme.COMPUTED[varName] = varValue;
});


module.exports = theme;
