import theme from '_theme';
import Util from '_common/Util';

const Sidebar = {};


Sidebar.init = () => {


  // Navigation

  const $NavGroups = $('#SidebarNav .NavGroup');
  const $Navs = $('#SidebarNav nav');


  $('.NavGroup > a').on('click', function(e) {
    e.preventDefault();

    const $NavGroup = $(this).closest('.NavGroup');
    const $NavGroupParents = $(this).parents('.NavGroup');

    const $Nav = $NavGroup.find('> nav');
    const $NavParemts = $Nav.parents('nav');

    $NavGroups.not($NavGroup).not($NavGroupParents).removeClass('-open');
    $NavGroup.toggleClass('-open');

    $Navs.not($Nav).not($NavParemts).slideUp('fast');
    $Nav.slideToggle('fast');

  });

  // Collapse

  $('#SidebarToggleCompactLink').on('click', Sidebar.toggleCompact);


};

Sidebar.toggle = () => {
  const $App = $('#App');

  const viewportWidth = Util.getViewportWidth();

  // Current viewport is desktop
  if (viewportWidth > 991) {
    $App.toggleClass('-sidebar-closed-desktop');
  }
  // Current viewport is mobile
  else {
    $App.toggleClass('-sidebar-open-mobile');
  }

  notifyLayoutUpdate();
};

Sidebar.close = () => {
  const $App = $('#App');

  const viewportWidth = Util.getViewportWidth();

  // Current viewport is desktop
  if (viewportWidth > 991) {
    $App.addClass('-sidebar-closed-desktop');
  }
  // Current viewport is mobile
  else {
    $App.removeClass('-sidebar-open-mobile');
  }

  notifyLayoutUpdate();
};

Sidebar.open = () => {
  const $App = $('#App');

  const viewportWidth = Util.getViewportWidth();

  // Current viewport is desktop
  if (viewportWidth > 991) {
    $App.removeClass('-sidebar-closed-desktop');
  }
  // Current viewport is mobile
  else {
    $App.addClass('-sidebar-open-mobile');
  }

  notifyLayoutUpdate();
};

Sidebar.toggleCompact = (e) => {

  e.preventDefault();

  const $App = $('#App');

  $App.toggleClass('-sidebar-compact');
  $App.addClass('-sidebar-open-mobile');
  $App.removeClass('-sidebar-closed-desktop');

  const viewportWidth = Util.getViewportWidth();

  if (viewportWidth > 767 && $App.hasClass('-sidebar-compact')) {
    $App.removeClass('-sidebar-open-mobile');
  }
  else {
    $App.addClass('-sidebar-open-mobile');
  }

  notifyLayoutUpdate();
};


function notifyLayoutUpdate () {
  const variables = theme.get();
  const timeout = 1000 * parseFloat(variables.AppLayoutTransitionDuration) || 500;


  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, timeout);
}


export default Sidebar;
