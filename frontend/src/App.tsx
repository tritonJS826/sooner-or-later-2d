import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './Logic/Auth/Auth';
import Menu from './Logic/Menu/Menu';
import Option from './Logic/Options/Options';
import About from './Logic/About/About';
import Singleplayer from './Logic/Game/SoloPlayer/PreGame';
import Multiplayer from './Logic/Game/MultiPlayer/PreGame/PreGame';
// import Statistic from './Logic/Statistic/Statistic';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Menu} path="/" exact />
      <Route component={Singleplayer} path="/singleplayer" />
      <Route component={Multiplayer} path="/multiplayer" />
      <Route component={Option} path="/option" />
      {/* <Route component={Statistic} path="/statistic" /> */}
      <Route component={About} path="/about" />
      <Route component={Auth} path="/auth" />
    </Switch>
  </BrowserRouter>
);

export default App;
