import './DashboardSidebar.scss';
import './SidebarHeader/SidebarHeader.scss';
import './SidebarNav/SidebarNav.scss';
import './SidebarNav/SidebarNavCompact.scss';
import './SidebarFooter/SidebarFooter.scss';

import DashboardSidebar from './DashboardSidebar';


window.addEventListener('load', function() {
  setTimeout(function() {
    DashboardSidebar.init();
  });
});


export default DashboardSidebar;
