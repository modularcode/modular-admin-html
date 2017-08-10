import './Items.scss';

import Items from './Items.js';


window.addEventListener('load', function() {
  setTimeout(function() {
    Items.init();
  }, 1000);
})
