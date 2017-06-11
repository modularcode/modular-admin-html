const theme = {};

theme.JS = {

  /*----------  Main Colors  ----------*/

  'colorPrimary':   'blue',
  'colorPrimary1':  '#85CE36',
  'colorPrimary2':  '#85CE36',
  'colorPrimary3':  '#85CE36',
  'colorPrimary4':  '#85CE36',

  'colorPrimary--light':    '#85CE36',
  'colorPrimary--lighter':  '#85CE36',
  'colorPrimary--dark':     '#85CE36',
  'colorPrimary--darker':   '#85CE36',

  'colorText':              '#4f5f6f',
  'colorText--light':       '#7e8e9f',
  'colorText--muted':       '#C2CCD6',
  'colorText--inverse':     '#ffffff',
  'colorText--passive':      '#c5c5c5',

  'colorDivider':           '#d7dde4',

  /*----------  Components  ----------*/

  // App
  'AppColorBg': '#f0f3f6',
  'AppHeaderHeight': '70px',
  'AppHeaderHeight--xs': '50px',
  'AppSidebarWidth': '230px',
  'AppFooterHeight': '50px',

  // Header
  'HeaderColorBg': '#d7dde4',

  // Footer
  'FooterColorBg': '#fff',

  // Sidebar
  'SidebarColorBg': '#4f5f6f',  // should be // 'darken(#4f5f6f, 10%)',
  'SidebarColorText': '#4f5f6f',  // should be //'fade-out('colorText-inverse, 0.5)',

  // Sidebar Nav
  // 'SidebarNavColorText': 'fade-out('colorText-inverse, 0.5)',
  // 'SidebarNavColorText--active': ''colorText-inverse',
  // 'SidebarNavColorBg': ''SidebarColorBg',
  // 'SidebarNavColorBg-active': 'darken('SidebarColorBg, 6%)',

  // Page
  'PagePaddingVertical--xl': '35px',
  'PagePaddingHorizontal--xl': '40px',

  'PagePaddingVertical--lg': '30px',
  'PagePaddingHorizontal--lg': '35px',

  'PagePaddingVertical--md': '25px',
  'PagePaddingHorizontal--md': '20px',

  'PagePaddingVertical--sm': '20px',
  'PagePaddingHorizontal--sm': '20px',

  'PagePaddingVertical--xs': '15px',
  'PagePaddingHorizontal--xs': '10px',

  // Card
  'CardPaddingHorizontal': '15px',
  'CardPaddingHorizontal--xl': '20px',
  'CardPaddingHorizontal--sm': '10px',
  'CardMarginBottom': '10px',

  'CardColorBg': 'rgba(255,255,255,0.94)',
};

// Generate CSS and SCSS variables strings
theme.CSS = '';
theme.SCSS = '';

Object.keys(theme.JS).map(function(key, index) {
  const varName = key;
  const varValue = theme.JS[key];

  const cssRule = `--${varName}: ${varValue};`;
  const sassRule = `$${varName}: ${varValue} !default;`;

  theme.CSS = theme.CSS + cssRule;
  theme.SCSS = theme.SCSS + sassRule;
}),


module.exports = theme;
