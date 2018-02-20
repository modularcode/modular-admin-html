import DashboardSidebar from '../DashboardSidebar';

const DashboardHeader = {};


DashboardHeader.init = () => {

  $('#HeaderSidebarToggleButton').on('click', DashboardSidebar.toggle);

};


export default DashboardHeader;
