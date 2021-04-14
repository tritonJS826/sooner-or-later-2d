import React from 'react';
import { Provider } from 'mobx-react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { store } from 'Store/CombineStores';
import MainMenu from 'Pages/MainMenu';
import BattleField from 'Pages/BattleField';
import Help from 'Pages/Help';
import About from 'Pages/About';
import Options from 'Pages/Options';
import styles from 'App.module.scss';

export const history = createBrowserHistory();
export const routes = {
  base: '/',
  battleField: '/battleField',
  about: '/about',
  help: '/help',
  options: '/options',
};

const App = () => (
  <Provider store={store}>
    <div className={styles["App"]}>
      <Router history={history}>

        <Route exact path="/"><MainMenu /></Route>

        <Route path="/battleField"><BattleField /></Route>

        <Route path="/help"><Help /></Route>

        <Route path="/options"><Options /></Route>

        <Route path="/about"><About /></Route>

      </Router>
    </div>
  </Provider>
);

export default App;
