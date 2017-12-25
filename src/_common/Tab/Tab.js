import utils from '_common/_utils';

const Tab = {};


Tab.init = () => {

  $(document).on('click', '.TabNavItem a', (e) => {

    e.preventDefault();

    const targetTabId = $(e.target).attr('href');

    // No target specified
    if (!targetTabId) {
      return false;
    }

    const targetEl = document.querySelector(targetTabId);

    const $navItem = $(e.target).closest('.TabNavItem');
    const $navItems = $(e.target).closest('.TabNav').find('.TabNavItem');

    const $targetTab = $(targetTabId);

    const $targetTabContainer = $targetTab.closest('.TabContent');
    const $targetTabContainerTabs = $targetTabContainer.find('> .TabPane');

    if (!$targetTab.length || !$targetTabContainer.length || !$targetTabContainerTabs.length) {
      return false;
    }


    $targetTabContainerTabs.removeClass('-active');
    $targetTab.addClass('-active');

    $navItems.removeClass('-active');
    $navItem.addClass('-active');

    // Fire event on DOM element
    utils.triggerEvent(document, 'tab.select', {
      detail: {
        el: targetEl
      }
    });

  });

};


export default Tab;
