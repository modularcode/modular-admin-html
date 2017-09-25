// Components
import Common from './_common';

// Pages
import './Items/List';
import Dashboard from './Dashboard';
// import ItemsEditor from './Items/Editor';

const App = {};

App.init = () => {

  const $App = $('#App');

  if (!$App.length) {
    return false;
  }

  Common.init();
  Dashboard.init();
};


export default App;
