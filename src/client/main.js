// External modules
import 'bootstrap/scss/_reboot.scss';
import 'bootstrap/scss/_print.scss';

// Internal deps
import './main.scss';

// Common modules
import Common from './_common';

// Components
import App from './App';
import Auth from './Auth';


window.addEventListener('load', function() {
  setTimeout(function() {
    Common.init();

    App.init();
    Auth.init();
  }, 500);
});
