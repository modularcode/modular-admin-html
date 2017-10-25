const Button = {};

Button.init = () => {

  $('.Button').on('click', function() {
    $(this).blur();
  });

};

export default Button;
