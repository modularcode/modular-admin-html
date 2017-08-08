const Color = require('color');

let variables = {

  /*----------  Colors palette  ----------*/

  // Ref:
  // https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

  'palette': {
    'blue':           Color('#007bff'),
    'indigo':         Color('#6610f2'),
    'purple':         Color('#6f42c1'),
    'pink':           Color('#e83e8c'),
    'red':            Color('#dc3545'),
    'orange':         Color('#fd7e14'),
    'yellow':         Color('#ffc107'),
    'green':          Color('#85CE36'),
    'teal':           Color('#20c997'),
    'cyan':           Color('#17a2b8'),
    'white':          Color('#fff'),
    'gray':           Color('#868e96'),
    'gray-dark':      Color('#343a40'),
    'black':          Color('#000')
  },

  /*----------  Context Colors  ----------*/

  'colorPrimary':          Color('#85CE36'),
  'colorPrimary-light':    () => variables['colorPrimary'].lighten(0.1),
  'colorPrimary-lighter':  () => variables['colorPrimary'].lighten(0.15),
  'colorPrimary-dark':     () => variables['colorPrimary'].darken(0.1),
  'colorPrimary-darker':   () => variables['colorPrimary'].darken(0.15),
  'colorSecondary':        Color('#868e96'),

  'colorText':             Color('#4f5f6f'),
  'colorText-light':       Color('#7e8e9f'),
  'colorText-muted':       Color('#C2CCD6'),
  'colorText-inverse':     Color('#ffffff'),
  'colorText-passive':     Color('#c5c5c5'),

  'colorDivider':          Color('#d7dde4'),
  'colorDivider-light':    () => variables['colorDivider'].lighten(0.1),
  'colorDivider-lighter':    () => variables['colorDivider'].lighten(0.15),
  'colorDivider-dark':     () => variables['colorDivider'].darken(0.1),
  'colorDivider-darker':     () => variables['colorDivider'].darken(0.15),

};

/*----------  All Colors  ----------*/

variables.colors = Object.assign(
  {},
  variables['palette'],
  {
    'primary':              variables['colorPrimary'],
    'primary-light':        variables['colorPrimary-light'],
    'primary-lighter':      variables['colorPrimary-lighter'],
    'primary-dark':         variables['colorPrimary-dark'],
    'primary-darker':       variables['colorPrimary-darker'],
    'secondary':            variables['colorSecondary'],
    'divider':              variables['colorDivider'],
  }
);


/*----------  Options  ----------*/


/*----------  Components  ----------*/

variables = Object.assign(variables, {


  // Body
  'BodyColorBg':                  Color('#f0f3f6'),

  // Link
  'LinkColor':                    'inherit',
  'LinkColor-hover':              () => variables['colorPrimary'],
  'LinkFontStyle':                'underline',
  'LinkFontStyle-hover':          'underline',

  // App
  'AppColorBg':                   Color('#f0f3f6'),
  'AppHeaderHeight':              '70px',
  'AppHeaderHeight-xs':           '50px',
  'AppSidebarWidth':              '240px',
  'AppSidebarWidth-collapsed':    '70px',
  'AppFooterHeight':              '46px',
  'AppLayoutTransitionDuration':  '.3s',

  // Header
  'HeaderColorBg':          Color('#fff'),
  'HeaderShadow':           '0px 0 20px rgba(72, 72, 72, 0.09)',
  'HeaderBorderBottom':     '1px solid #e0e0e0',

  // Footer
  'FooterColorBg':          Color('#fff'),
  'FooterShadow':           'none',

  // Sidebar
  'SidebarColorBg':         Color('#3a4651').darken(0.1),
  'SidebarColorText':       () => variables['colorText-inverse'].fade(0.2),
  'SidebarBgImage':         'url(\'~_assets/sidebar-bg-1.jpg\')',
  'SidebarBgImageOpacity':  1,
  'SidebarShadow':          '0px 0px 30px rgba(72, 72, 72, 0.72)',

  // Sidebar Nav
  'SidebarNavColorText':        () => variables.palette.white.fade(0.4),
  'SidebarNavColorText-active': () => variables.palette.white,

  // Page
  'PagePaddingVertical-xs':     '15px',
  'PagePaddingHorizontal-xs':    '10px',

  'PagePaddingVertical-sm':     '20px',
  'PagePaddingHorizontal-sm':   '20px',

  'PagePaddingVertical-md':     '25px',
  'PagePaddingHorizontal-md':   '20px',

  'PagePaddingVertical-lg':     '25px',
  'PagePaddingHorizontal-lg':   '20px',

  'PagePaddingVertical-xl':     '35px',
  'PagePaddingHorizontal-xl':   '40px',



  // Card
  'CardColorBg':            'rgba(255,255,255,0.94)',
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

});

module.exports = variables;
