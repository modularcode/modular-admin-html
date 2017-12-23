import './AppSidebar.scss';
import './SidebarHeader.scss';
import './SidebarNav.scss';
import './SidebarNavCompact.scss';
import './SidebarFooter.scss';

import AppSidebar from './AppSidebar';


window.addEventListener('load', function() {
  setTimeout(function() {
    AppSidebar.init();
  });
});


export default AppSidebar;
