import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './Logic/Auth/Auth';
import Menu from './Logic/Menu/Menu';
import Option from './Logic/Options/Options';
import Game from './Logic/Game/Game';
import About from './Logic/About/About';
import Statistic from './Logic/Statistic/Statistic';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Menu} path="/" exact />
      <Route component={Game} path="/game" />
      <Route component={Option} path="/option" />
      <Route component={Statistic} path="/statistic" />
      <Route component={About} path="/about" />
      <Route component={Auth} path="/auth" />
    </Switch>
  </BrowserRouter>
);

export default App;
