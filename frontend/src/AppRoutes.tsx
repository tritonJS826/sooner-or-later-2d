import PageMeta from 'Kit/PageMeta';
// import Menu from 'Logic/Menu/Menu';
import Auth from './Logic/Auth/Auth';
import Options from './Logic/Options/Options';
import About from './Logic/About/About';
import Statistic from './Logic/Statistic/Statistic';

const AppRoutes = {
  homePage: new PageMeta<void>({
    path: '/menu',
    render: () => <Auth />,
  }),

  options: new PageMeta<void>({
    path: '/options',
    render: () => <Options />,
  }),

  about: new PageMeta<void>({
    path: '/about',
    render: () => <About />,
  }),

  statistic: new PageMeta<void>({
    path: '/statistic',
    render: () => <Statistic />,
  }),

  auth: new PageMeta<void>({
    path: '/auth',
    render: () => <Auth />,
  }),
};

export default AppRoutes;
