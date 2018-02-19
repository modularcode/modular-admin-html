import AppSidebar from '../AppSidebar';

const AppHeader = {};


AppHeader.init = () => {

  $('#HeaderSidebarToggleButton').on('click', AppSidebar.toggle);

};


export default AppHeader;
