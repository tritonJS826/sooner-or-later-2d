import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRouter } from 'Kit/PageRoutes';
import NotFoundPage from 'Logic/Error/NotFoundPage';
import AppRoutes from 'AppRoutes';
import MultiLang from 'Services/MultiLang';

export const multiLang = new MultiLang();

const App: React.FC = () => (
  <BrowserRouter>
    <PageRouter
      routes={AppRoutes}
      renderNotFound={() => <NotFoundPage />}
    />
  </BrowserRouter>
);

export default App;
