import AppHeader from './AppHeader';
import './AppSearch';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';
import AppCustomize from './AppCustomize';

const AppCommon = {};

AppCommon.init = () => {
  AppHeader.init();
  AppCustomize.init();
};

export {
  AppCommon, AppHeader, AppSidebar, AppFooter, AppCustomize
};

export default AppCommon;
