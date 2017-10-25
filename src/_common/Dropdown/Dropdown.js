const Dropdown = {};


Dropdown.init = function () {

  $(document).on('click', '.DropdownToggle', function(e) {
    e.preventDefault();
  });

  $(document).on('click', function(e) {

    const $dropdowns = $('.Dropdown');
    const $dropdown = $(e.target).closest('.Dropdown');


    if ($dropdown.length) {
      $dropdowns.not($dropdown).find('.DropdownContent').hide();

      // Clicked at toggle button
      if ($(e.target).closest('.DropdownToggle', $dropdown).length) {
        $dropdown.find('.DropdownContent').toggle();
      }
    }
    else {
      $dropdowns.find('.DropdownContent').hide();
    }

  });

};


export default Dropdown;
