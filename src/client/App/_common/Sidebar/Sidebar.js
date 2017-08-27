import theme from '_theme';
import Util from '_common/Util';

const Sidebar = {
  refs: {
    $App: null,
    $SidebarNav: null,
    $NavGroups: null,
    $Navs: null
  }
};


Sidebar.init = function () {

  const vm = Sidebar;

  // Ref elements

  vm.refs.$Main = $("#Main");
  vm.refs.$App = $('#App');
  vm.refs.$SidebarNav = $('#SidebarNav');
  vm.refs.$SidebarFooter = $('#SidebarFooter');
  vm.refs.$NavGroups = vm.refs.$SidebarNav.find('.NavGroup');
  vm.refs.$Navs = vm.refs.$SidebarNav.find('nav');
  vm.refs.$NavLinksWithTooltip = vm.refs.$SidebarNav.find('> .NavLink, > .NavGroup > .NavLink');
  vm.refs.$FooterNavLinks = vm.refs.$SidebarFooter.find('.NavLink');

  // Tooltips

  Sidebar.initNavTooltips();
  Sidebar.initFooterTooltips();

  // Navigation

  $('.NavGroup > a').on('click', function(e) {
    e.preventDefault();

    const $NavGroup = $(this).closest('.NavGroup');
    const $NavGroupParents = $(this).parents('.NavGroup');

    const $Nav = $NavGroup.find('> nav');
    const $NavParemts = $Nav.parents('nav');

    vm.refs.$NavGroups.not($NavGroup).not($NavGroupParents).removeClass('-open');

    $NavGroup.toggleClass('-open');

    if (Sidebar.isCompact()) {
      vm.refs.$Navs.not($Nav).not($NavParemts).fadeOut('fast');
      $Nav.fadeToggle('fast');
    }
    else {
      vm.refs.$Navs.not($Nav).not($NavParemts).slideUp('fast');
      $Nav.slideToggle('fast');
    }

    // Check if sidebar has at least one open NavGroup
    if (vm.refs.$SidebarNav.find('> .NavGroup.-open').length) {
      vm.refs.$App.addClass('-sidebar-nav-open');
    }
    else {
      vm.refs.$App.removeClass('-sidebar-nav-open');
    }

  });


  // Sidebar overlay click handler

  $('#SidebarOverlay').on('click', function() {

    if (Sidebar.isCompact()) {
      vm.refs.$Navs.filter(':visible').fadeOut('fast');
      vm.refs.$NavGroups.removeClass('-open');
      vm.refs.$App.removeClass('-sidebar-nav-open');
    }
    else {
      Sidebar.close();
    }

  });

  // Dismiss button click

  vm.refs.$SidebarNav.find('.DismissBtn').on('click', function(e) {

    e.preventDefault();

    if (Sidebar.isCompact()) {
      vm.refs.$Navs.filter(':visible').fadeOut('fast');
      vm.refs.$NavGroups.removeClass('-open');
      vm.refs.$App.removeClass('-sidebar-nav-open');
    }
  });

  // Toggle compact click
  $('#SidebarToggleCompactLink').on('click', function(e) {

    e.preventDefault();

    vm.refs.$Navs.filter(':visible').hide();
    vm.refs.$NavGroups.removeClass('-open');
    vm.refs.$App.removeClass('-sidebar-nav-open');

    Sidebar.toggleCompact(e);

  });

  // Toggle customize click
  $('#SidebarToggleCustomize').on('click', function(e) {
    e.preventDefault();;

    vm.refs.$App.toggleClass('-customize-open');
  })

};

Sidebar.isCompact = function() {
  const vm = Sidebar;

  const viewportName = Util.getViewportName();

  return (
    viewportName === 'md' &&
    vm.refs.$App.hasClass('-sidebar-compact-tablet')
  )
  ||
  (
    (viewportName === 'lg' || viewportName === 'xl') &&
    vm.refs.$App.hasClass('-sidebar-compact-desktop')
  );
};

Sidebar.toggle = function() {
  const vm = Sidebar;

  const viewportName = Util.getViewportName();

  if (viewportName === 'xs' || viewportName === 'sm') {
    vm.refs.$App.toggleClass('-sidebar-open-mobile');
  }
  else if (viewportName === 'md') {
    vm.refs.$App.toggleClass('-sidebar-open-tablet');
  }
  else if (viewportName === 'lg' || viewportName === 'xl') {
    vm.refs.$App.toggleClass('-sidebar-closed-desktop');
  }

  notifyLayoutUpdate();
};

Sidebar.close = function() {
  const vm = Sidebar;

  const viewportName = Util.getViewportName();

  if (viewportName === 'xs' || viewportName === 'sm') {
    vm.refs.$App.removeClass('-sidebar-open-mobile');
  }
  else if (viewportName === 'md') {
    vm.refs.$App.removeClass('-sidebar-open-tablet');
  }
  else if (viewportName === 'lg' || viewportName === 'xl') {
    vm.refs.$App.removeClass('-sidebar-closed-desktop');
  }

  notifyLayoutUpdate();
};

Sidebar.open = function() {
  const vm = Sidebar;

  const viewportName = Util.getViewportName();

  if (viewportName === 'xs' || viewportName === 'sm') {
    vm.refs.$App.addClass('-sidebar-open-mobile');
  }
  else if (viewportName === 'md') {
    vm.refs.$App.addClass('-sidebar-open-tablet');
  }
  else if (viewportName === 'lg' || viewportName === 'xl') {
    vm.refs.$App.addClass('-sidebar-closed-desktop');
  }

  notifyLayoutUpdate();
};

Sidebar.toggleCompact = function() {

  const vm = Sidebar;

  const viewportName = Util.getViewportName();


  if (viewportName === 'xs' || viewportName === 'sm') {
    return;
  }
  else if (viewportName === 'md') {
    vm.refs.$App.toggleClass('-sidebar-compact-tablet');
  }
  else if (viewportName === 'lg' || viewportName === 'xl') {
    vm.refs.$App.toggleClass('-sidebar-compact-desktop');
  }

  Sidebar.updateFooterTooltipsPlacement();

  notifyLayoutUpdate();
};

Sidebar.initNavTooltips = function() {
  const vm = Sidebar;

  const isRTL = vm.refs.$Main.hasClass('-rtl');

  // vm.refs.$NavLinksWithTooltip.off('mouseenter mouseleave focus click blur');

  vm.refs.$NavLinksWithTooltip.each(function() {

    const $el = $(this);
    const title = $el.find('> span').text();

    if (!title) {
      return;
    }

    $el.tooltip({
      placement: isRTL ? 'left' : 'right',
      title: title,
      trigger: 'manual'
    });

    $el.hover(function() {

      if (!Sidebar.isCompact()) {
        return;
      }

      $el.tooltip('show');
    }, function() {
      $el.tooltip('hide');
    });

    $el.on('focus', function() {
      if (!Sidebar.isCompact()) {
        return;
      }

      $el.tooltip('show');
    });


    $el.on('click blur', function() {
      $el.tooltip('hide');
    });
  });


};

Sidebar.destroyNavTooltips = function() {
  vm.refs.$NavLinksWithTooltip.each(function() {
    $(this).tooltip('dispose');
  });
};


Sidebar.initFooterTooltips = function() {
  const vm = Sidebar;

  const isRTL = vm.refs.$Main.hasClass('-rtl');

  let placement = 'top';

  if (Sidebar.isCompact()) {
    placement = isRTL ? 'left' : 'right';
  }

  vm.refs.$FooterNavLinks.each(function() {


    const $el = $(this);
    const title = $el.attr('title');

    $el.tooltip({
      placement: placement,
      title: title,
      trigger: 'manual'
    });

    $el.hover(function() {
      $el.tooltip('show');
    }, function() {
      $el.tooltip('hide');
    });

    $el.on('focus', function() {
      $el.tooltip('show');
    });


    $el.on('click blur', function() {
      $el.tooltip('hide');
    });
  });
};

Sidebar.updateFooterTooltipsPlacement = function() {
  const vm = Sidebar;

  const isRTL = vm.refs.$Main.hasClass('-rtl');

  let placement = 'top';

  if (Sidebar.isCompact()) {
    placement = isRTL ? 'left' : 'right';
  }

  vm.refs.$FooterNavLinks.each(function() {

    $(this).data('bs.tooltip').config.placement = placement;

  });
};


Sidebar.destroyFooterTooltips = function() {
  const vm = Sidebar;

  // Remove all tooltips
  vm.refs.$FooterNavLinks.each(function() {
    $(this).tooltip('dispose');
  });
};


function notifyLayoutUpdate () {
  const variables = theme.get();
  const timeout = 1000 * parseFloat(variables.AppLayoutTransitionDuration) || 500;

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, timeout);
}


export default Sidebar;
