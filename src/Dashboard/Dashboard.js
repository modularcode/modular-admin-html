// Components
import Common from './_common';

// Pages
import Main from './Main';
import ItemsList from './Items/ItemsList';
import UIComponents from './UIComponents';
// import ItemsEditor from './Items/Editor';

const App = {};

App.init = () => {

  console.log("init app!");

  const $Dashboard = $('#Dashboard');

  if (!$Dashboard.length) {
    return false;
  }

  Common.init();
  Main.init();
  ItemsList.init();
};


export default App;
