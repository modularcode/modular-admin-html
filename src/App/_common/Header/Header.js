import Sidebar from '../Sidebar';

const Header = {};


Header.init = () => {

  $('#HeaderSidebarToggleButton').on('click', Sidebar.toggle);

};


export default Header;
