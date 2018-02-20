const ENV = typeof window === undefined ? window.ENV || {} : process.env;
const PUBLIC_PATH = ENV.PUBLIC_PATH || '/';

const Color = require('color');
const MaterialColors = require('material-colors');

const utils = require('./utils');


const MaterialColorsAll = utils.getColors(MaterialColors);
const MaterialColorsPalette = utils.getColors(MaterialColors, true);


let variables = {

  /*----------  Context Colors  ----------*/

  'colorPrimary':          Color('#8BC34A'),
  'colorPrimary-dark':     () => variables['colorPrimary'].darken(0.1),
  'colorPrimary-darker':   () => variables['colorPrimary'].darken(0.15),
  'colorPrimary-darkest':  () => variables['colorPrimary'].darken(0.2),
  'colorPrimary-light':    () => variables['colorPrimary'].lighten(0.1),
  'colorPrimary-lighter':  () => variables['colorPrimary'].lighten(0.15),
  'colorPrimary-lightest': () => variables['colorPrimary'].lighten(0.2),
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
  'BodyColorBg':                        Color('#f0f3f6'),

  // Auth

  // Dashboard
  'DashboardColorBg':                   Color('#f0f3f6'),
  'DashboardHeaderHeight':              '60px',
  'DashboardHeaderHeight-xs':           '50px',
  'DashboardSidebarWidth':              '240px',
  'DashboardSidebarWidth-compact':      '70px',
  'DashboardFooterHeight':              '50px',
  'DashboardCustomizeWidth':            '280px',
  'DashboardLayoutTransitionDuration':  '0.3s',

  // Dashboard Header
  'DashboardHeaderColorBg':          Color('#fff'),
  'DashboardHeaderShadow':           '0px 0px 20px rgba(0, 0, 0, 0.3)',
  'DashboardHeaderBorderBottom':     '1px solid #e0e0e0',

  // Dashboard Footer
  'DashboardFooterColorBg':          Color('#fff'),
  'DashboardFooterShadow':           'none',

  // Dashboard Sidebar
  'DashboardSidebarColorBg':           Color('#3b4c5d'),
  'DashboardSidebarColorText':         () => variables['colorText-inverse'].fade(0.2),
  // 'SidebarBgImage':        'none',
  'DashboardSidebarBgImage':           `url('~${PUBLIC_PATH}bundle/sidebar-bg-1.jpg')`,
  'DashboardSidebarBgImageOpacity':    1,
  'DashboardSidebarShadow':            '0px 0px 30px rgba(0, 0, 0, 0.5)',
  'DashboardSidebarPaddingHorizontal': '20px',

  // Dashboard Sidebar Nav
  'DashboardSidebarNavColorText':        () => variables.colors.white.fade(0.4),
  'DashboardSidebarNavColorText-open':   () => variables.colors.white.fade(0.4),
  'DashboardSidebarNavColorText-active': () => variables.colors.white,


  // Core components

  // Link
  'LinkColor':                    () => variables['colorPrimary'],
  'LinkColor-hover':              () => variables['colorPrimary-darkest'],
  'LinkFontWeight':               '600',
  'LinkTransition':               'ease .15s',
  'LinkTextDecoration':           'none',
  'LinkTextDecoration-hover':     'none',

  // Card
  'CardColorBg':            '#fff',
  // 'CardShadow':             '1px 1px 5px rgba(126, 142, 159, 0.1)',
  'CardShadow':             '1px 1px 5px rgba(0, 0, 0, 0.03)',
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
  'ProgressColorBg':        '#dddddd',

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

});

module.exports = variables;





