import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRouter } from 'Kit/PageRoutes';
import NotFoundPage from 'Logic/Error/NotFoundPage';
import AppRoutes from 'AppRoutes';
// import Auth from './Logic/Auth/Auth';
// import Menu from './Logic/Menu/Menu';
// import Option from './Logic/Options/Options';
// import About from './Logic/About/About';
// import Singleplayer from './Logic/Game/SoloPlayer/PreGame';
// import Multiplayer from './Logic/Game/MultiPlayer/PreGame/PreGame';
// import Statistic from './Logic/Statistic/Statistic';

const App: React.FC = () => (
  <BrowserRouter>
    <PageRouter
      routes={AppRoutes}
      renderNotFound={() => <NotFoundPage />}
    />
  </BrowserRouter>
);

export default App;
