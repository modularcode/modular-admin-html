import DashboardHeader from './DashboardHeader';
import './DashboardSearch';
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter';
import DashboardCustomize from './DashboardCustomize';

const DashboardCommon = {};

DashboardCommon.init = () => {
  DashboardHeader.init();
  DashboardCustomize.init();
};

export {
  DashboardCommon, DashboardHeader, DashboardSidebar, DashboardFooter, DashboardCustomize
};

export default DashboardCommon;
