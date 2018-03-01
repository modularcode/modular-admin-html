// Components
import Common from './_common';

// Pages
import Main from './Main';
import ItemsList from './Items/ItemsList';
import UIComponents from './UIComponents';
// import ItemsEditor from './Items/Editor';
import ItemsEditor from './Items/ItemsEditor';

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
  ItemsEditor.init();
};


export default App;
