import 'bootstrap/js/src/tooltip';

const Tooltip = {};


Tooltip.init = function () {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

};


export default Tooltip;
