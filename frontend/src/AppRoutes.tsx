import PageMeta from 'Kit/PageMeta';
import Menu from 'Logic/Menu/MenuPage';
import AuthPage from './Logic/AuthPage/AuthPage';
import OptionsPage from './Logic/OptionsPage/OptionsPage';
import AboutPage from './Logic/About/About';
import StatisticPage from './Logic/StatisticPage/StatisticPage';

const AppRoutes = {
  homePage: new PageMeta<void>({
    path: '/menu',
    render: () => <Menu />,
    // render: () => <AuthPage />,
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
};

export default AppRoutes;
