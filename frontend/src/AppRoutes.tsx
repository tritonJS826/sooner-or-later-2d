import PageMeta from 'Kit/PageMeta';
import HomePage from 'Logic/Menu/MenuPage';
import AuthPage from 'Logic/Auth/AuthPage';
import OptionsPage from 'Logic/Options/OptionsPage';
import AboutPage from 'Logic/About/About';
import StatisticPage from 'Logic/Statistic/StatisticPage';
import PreGamePage from 'Logic/Game/Player/PreGamePage/PreGamePage';
import MultiPlayerPage from 'Logic/Game/Player/MultiPlayerPage/MultiPlayerPage';
import GameConfigurationPage from 'Logic/Game/Player/GameConfigurationPage/GameConfigurationPage';

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
    render: () => <MultiPlayerPage/>,
  }),

  gameConfiguration: new PageMeta<{multiplayer: string}>({
    renderParameters: (object) => ({ multiplayer: object.multiplayer }),
    path: '/game-configuration/multiplayer=:multiplayer',
    render: (props) => <GameConfigurationPage multiplayer={props.match.params.multiplayer} />,
  }),

  preGame: new PageMeta<{ hostId: string, port: string }>({
    renderParameters: (object) => ({ hostId: object.hostId, port: object.port }),
    path: '/pre-game/hostId=:hostId&port=:port',
    render: (props) => <PreGamePage hostId={props.match.params.hostId} port={props.match.params.port} />,
  }),
};

export default AppRoutes;
