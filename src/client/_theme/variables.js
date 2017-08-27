const ENV = typeof window === undefined ? window.ENV || {} : process.env;
const PUBLIC_PATH = ENV.PUBLIC_PATH || '/';

const Color = require('color');
const MaterialColors = require('material-colors');

const themeUtils = require('./themeUtils');


const MaterialColorsAll = themeUtils.getColors(MaterialColors);
const MaterialColorsPalette = themeUtils.getColors(MaterialColors, true);


let variables = {

  /*----------  Context Colors  ----------*/

  'colorPrimary':          Color('#8BC34A'),
  'colorPrimary-dark':     () => variables['colorPrimary'].darken(0.1),
  'colorPrimary-darker':   () => variables['colorPrimary'].darken(0.15),
  'colorPrimary-light':    () => variables['colorPrimary'].lighten(0.1),
  'colorPrimary-lighter':  () => variables['colorPrimary'].lighten(0.15),
  'colorSecondary':        Color('#536DFE'),

  'colorText':             Color('#4f5f6f'),
  'colorText-light':       Color('#7e8e9f'),
  'colorText-lighter':     Color('#a5b4c3'),
  'colorText-dark':        Color('#2f373f'),
  'colorText-darker':      Color('#2f373f'),
  'colorText-muted':       Color('#C2CCD6'),
  'colorText-inverse':     Color('#ffffff'),
  'colorText-passive':     Color('#c5c5c5'),
  'colorTextSecondary':    Color('#757575'),

  'colorDivider':          Color('#d7dde4'),

  'colorDivider-light':    () => variables['colorDivider'].lighten(0.1),
  'colorDivider-lighter':  () => variables['colorDivider'].lighten(0.15),
  'colorDivider-dark':     () => variables['colorDivider'].darken(0.1),
  'colorDivider-darker':   () => variables['colorDivider'].darken(0.15),

};

variables.colorsTheme = {
  'primary':              variables['colorPrimary'],
  'primary-light':        variables['colorPrimary-light'],
  'primary-dark':         variables['colorPrimary-dark'],
  'secondary':            variables['colorSecondary'],
  'text':                 variables['colorText'],
  'text-light':           variables['colorText-light'],
  'text-muted':           variables['colorText-muted'],
  'text-inverse':         variables['colorText-inverse'],
  'text-passive':         variables['colorText-passive'],
  'textSecondary':        variables['colorTextSecondary'],
  'divider':              variables['colorDivider'],
};

variables.colorsPaletteFull = MaterialColorsAll;

variables.colorsPalette = MaterialColorsPalette;


/*----------  All Colors  ----------*/

variables.colors = Object.assign(
  {},
  variables.colorsPaletteFull,
  variables.colorsTheme
);




/*----------  Options  ----------*/


/*----------  Components  ----------*/

variables = Object.assign(variables, {


  // Body
  'BodyColorBg':                  Color('#f0f3f6'),

  // Link
  'LinkColor':                    () => variables['colorText-dark'],
  'LinkColor-hover':              () => variables['colorPrimary-dark'],
  'LinkFontWeight':               '600',
  'LinkTextDecoration':           'none',
  'LinkTextDecoration-hover':     'none',

  // App
  'AppColorBg':                   Color('#f0f3f6'),
  'AppHeaderHeight':              '60px',
  'AppHeaderHeight-xs':           '50px',
  'AppSidebarWidth':              '240px',
  'AppSidebarWidth-compact':      '70px',
  'AppFooterHeight':              '46px',
  'AppLayoutTransitionDuration':  '0.3s',

  // Header
  'HeaderColorBg':          Color('#fff'),
  'HeaderShadow':           '0px 0 20px rgba(72, 72, 72, 0.09)',
  'HeaderBorderBottom':     '1px solid #e0e0e0',

  // Footer
  'FooterColorBg':          Color('#fff'),
  'FooterShadow':           'none',

  // Sidebar
  'SidebarColorBg':           Color('#3b4c5d'),
  'SidebarColorText':         () => variables['colorText-inverse'].fade(0.2),
  // 'SidebarBgImage':        'none',
  'SidebarBgImage':           `url('~${PUBLIC_PATH}sidebar-bg-1.jpg')`,
  'SidebarBgImageOpacity':    1,
  'SidebarShadow':            '0px 0px 30px rgba(72, 72, 72, 0.72)',
  'SidebarPaddingHorizontal': '20px',

  // Sidebar Nav
  'SidebarNavColorText':        () => variables.colors.white.fade(0.4),
  'SidebarNavColorText-open':   () => variables.colors.white.fade(0.4),
  'SidebarNavColorText-active': () => variables.colors.white,

  // Page
  'PagePaddingVertical-xs':     '15px',
  'PagePaddingHorizontal-xs':   '10px',

  'PagePaddingVertical-sm':     '20px',
  'PagePaddingHorizontal-sm':   '20px',

  'PagePaddingVertical-md':     '25px',
  'PagePaddingHorizontal-md':   '20px',

  'PagePaddingVertical-lg':     '25px',
  'PagePaddingHorizontal-lg':   '20px',

  'PagePaddingVertical-xl':     '35px',
  'PagePaddingHorizontal-xl':   '40px',

  // Card
  'CardColorBg':            '#fff',
  'CardShadow':             '1px 1px 5px rgba(126, 142, 159, 0.1)',
  'CardMarginBottom':       '15px',
  'CardMarginBottom-sm':    '15px',
  'CardMarginBottom-md':    '20px',
  'CardMarginBottom-lg':    '20px',
  'CardMarginBottom-xl':    '30px',

  'CardBlockPaddingVertical':       '10px',
  'CardBlockPaddingVertical-xl':    '15px',
  'CardBlockPaddingVertical-sm':    '8px',

  'CardBlockPaddingHorizontal':     '15px',
  'CardBlockPaddingHorizontal-xl':  '20px',
  'CardBlockPaddingHorizontal-sm':  '10px',

  // Dropdown
  'DropdownColorBg':        '#fff',

  // Progress
  'ProgressColorBg':        '#dddddd'

});

module.exports = variables;





