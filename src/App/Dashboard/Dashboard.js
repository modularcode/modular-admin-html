// Components
import './Stats';
import History from './History';
import Items from './Items';
import SalesBreakdown from './SalesBreakdown';


const Dashboard = {};

Dashboard.init = () => {
  History.init();
  Items.init();
  SalesBreakdown.init();
};

export default Dashboard;
