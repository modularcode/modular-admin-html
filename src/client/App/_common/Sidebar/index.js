import './Sidebar.scss';

import Sidebar from './Sidebar';


window.addEventListener('load', function() {
  setTimeout(function() {
    Sidebar.init();
  });
});


export default Sidebar;
