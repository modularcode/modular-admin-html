import theme from '_theme';

const Sidebar = {};


Sidebar.init = () => {

};

Sidebar.toggle = () => {
  const $App = $('#App');

  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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

  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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

  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // Current viewport is desktop
  if (viewportWidth > 991) {
    $App.removelass('-sidebar-closed-desktop');
  }
  // Current viewport is mobile
  else {
    $App.addClass('-sidebar-open-mobile');
  }

  notifyLayoutUpdate();
};

Sidebar.toggleCollapse = () => {

};


function notifyLayoutUpdate () {
  const variables = theme.get();
  const timeout = 1000 * parseFloat(variables.AppLayoutTransitionDuration) || 500;


  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, timeout);
}


export default Sidebar;
