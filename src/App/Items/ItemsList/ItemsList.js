const List = {
  refs: {},
  init: function() {
    const vm = this;

    vm.refs.$el = $("#ItemsListPage");

    if (!vm.refs.$el.length) {
      return false;
    }

    vm.refs.$checkAll = $("#SelectAllItemsCheckbox");

    vm.refs.$checkAll.on('change', function() {
      const isChecked = $(this).is(':checked');

      vm.refs.$el.find('.ListContent .ItemCheck input')
        .prop('checked', isChecked);
    });
  }
};

export default List;
