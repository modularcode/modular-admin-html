import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Common = {};

Common.init = () => {
  Header.init();
};

export {
  Common, Header, Sidebar, Footer
};

export default Common;
