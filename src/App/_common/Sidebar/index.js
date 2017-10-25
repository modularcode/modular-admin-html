import './Sidebar.scss';
import './SidebarHeader.scss';
import './SidebarNav.scss';
import './SidebarNavCompact.scss';
import './SidebarFooter.scss';

import Sidebar from './Sidebar';


window.addEventListener('load', function() {
  setTimeout(function() {
    Sidebar.init();
  });
});


export default Sidebar;
