// Components
import Common from './_common';

// Pages
import Dashboard from './Dashboard';
import ItemsList from './Items/ItemsList';
import UIComponents from './UIComponents';
// import ItemsEditor from './Items/Editor';

const App = {};

App.init = () => {

  const $App = $('#App');

  if (!$App.length) {
    return false;
  }

  Common.init();
  Dashboard.init();
  ItemsList.init();
};


export default App;
