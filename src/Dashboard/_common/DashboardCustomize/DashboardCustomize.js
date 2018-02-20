const Customize = {
  refs: {
    $Dashboard: null,
    $DismissButton: null,
  }
};

Customize.init = function() {
  const vm = Customize;

  vm.refs.$Dashboard = $('#Dashboard');
  vm.refs.$DismissButton = $('#CustomizeDismissButton');

  vm.refs.$DismissButton.on('click', function(e) {
    e.preventDefault();

    Customize.toggle();
  });
};

Customize.toggle = function()  {
  const vm = Customize;

  vm.refs.$Dashboard.toggleClass('-customize-open');
};

export default Customize;
