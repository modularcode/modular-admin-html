import Header from './Header';
import './Search';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Customize from './Customize';

const Common = {};

Common.init = () => {
  Header.init();
  Customize.init();
};

export {
  Common, Header, Sidebar, Footer, Customize
};

export default Common;
