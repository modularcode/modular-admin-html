const Customize = {
  refs: {
    $App: null,
    $DismissButton: null,
  }
};

Customize.init = function() {
  const vm = Customize;

  vm.refs.$App = $('#App');
  vm.refs.$DismissButton = $('#CustomizeDismissButton');

  vm.refs.$DismissButton.on('click', function(e) {
    e.preventDefault();

    Customize.toggle();
  });
};

Customize.toggle = function()  {
  const vm = Customize;

  vm.refs.$App.toggleClass('-customize-open');
};

export default Customize;
