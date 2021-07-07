import PageMeta from 'Kit/PageMeta';
import HomePage from 'Logic/Menu/MenuPage';
import AuthPage from 'Logic/AuthPage/AuthPage';
import OptionsPage from 'Logic/OptionsPage/OptionsPage';
import AboutPage from 'Logic/About/About';
import StatisticPage from 'Logic/StatisticPage/StatisticPage';
import GameConfigurationPage from 'Logic/Game/Player/GameConfigurationPage';
import MultiPlayerPage from 'Logic/Game/Player/MultiPlayerPage';
import PreGamePage from 'Logic/Game/Player/PreGamePage';

const AppRoutes = {
  homePage: new PageMeta<void>({
    path: '/menu',
    render: () => <HomePage />,
  }),

  options: new PageMeta<void>({
    path: '/options',
    render: () => <OptionsPage />,
  }),

  about: new PageMeta<void>({
    path: '/about',
    render: () => <AboutPage />,
  }),

  statistic: new PageMeta<void>({
    path: '/statistic',
    render: () => <StatisticPage />,
  }),

  auth: new PageMeta<void>({
    path: '/auth',
    render: () => <AuthPage />,
  }),

  multiplayer: new PageMeta<void>({
    path: '/multiplayer',
    render: () => <MultiPlayerPage />,
  }),

  gameConfiguration: new PageMeta<void>({
    path: '/game-configuration',
    render: () => <GameConfigurationPage />,
  }),

  preGame: new PageMeta<void>({
    path: '/pre-game',
    render: () => <PreGamePage />,
  }),
};

export default AppRoutes;
