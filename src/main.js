// External modules
import 'bootstrap/scss/bootstrap-reboot.scss';

// Internal deps
import './main.scss';

// Common modules
import Common from './_common';

// Components
import Auth from './Auth';
import Dashboard from './Dashboard';


window.addEventListener('load', function() {
  setTimeout(function() {
    Common.init();

    Auth.init();
    Dashboard.init();
  }, 200);
});
