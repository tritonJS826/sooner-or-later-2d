import PageMeta from 'Kit/PageMeta';
import HomePage from 'Logic/Menu/MenuPage';
import AuthPage from 'Logic/Auth/AuthPage';
import OptionsPage from 'Logic/Options/OptionsPage';
import AboutPage from 'Logic/About/AboutPage';
import PreGamePage from 'Logic/Game/Player/PreGamePage/PreGamePage';
import MultiPlayerPage from 'Logic/Game/Player/MultiPlayerPage/MultiPlayerPage';
import GameConfigurationPage from 'Logic/Game/Player/GameConfigurationPage/GameConfigurationPage';
import GamePage from 'Logic/Game/GamePage';

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

  auth: new PageMeta<void>({
    path: '/auth',
    render: () => <AuthPage />,
  }),

  multiplayer: new PageMeta<void>({
    path: '/multiplayer',
    render: () => <MultiPlayerPage />,
  }),

  gameConfiguration: new PageMeta<{ multiplayer: string }>({
    renderParameters: (object) => ({ multiplayer: object.multiplayer }),
    path: '/game-configuration/multiplayer=:multiplayer',
    render: (props) => <GameConfigurationPage multiplayer={props.match.params.multiplayer} />,
  }),

  preGame: new PageMeta<{ hostId: string, port: string, multiplayer?: string, worldId?: string, levelId?: string }>({
    renderParameters: (object) => ({
      hostId: object.hostId,
      port: object.port,
      multiplayer: object.multiplayer,
      worldId: object.worldId,
      levelId: object.levelId,

    }),
    path: '/pre-game/hostId=:hostId&port=:port',
    render: (props) => (
      <PreGamePage
        hostId={props.match.params.hostId}
        port={props.match.params.port}
        multiplayer={props.match.params.multiplayer}
        worldId={props.match.params.worldId}
        levelId={props.match.params.levelId}
      />
    ),
  }),

  game: new PageMeta<void>({
    path: '/game',
    render: () => <GamePage />,
  }),
};

export default AppRoutes;
