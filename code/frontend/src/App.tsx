import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRouter } from 'Kit/PageRoutes';
import NotFoundPage from 'Logic/Error/NotFoundPage';
import AppRoutes from 'AppRoutes';
import MultiLang from 'Services/MultiLang';
import ErrorHandler from 'Logic/ErrorHandling';
import { useLocalObservable } from 'mobx-react';

export const multiLang = new MultiLang();

const App: React.FC = () => {
  const errorHandler = useLocalObservable(() => new ErrorHandler());
  useEffect(() => {
    errorHandler.addErrorListener();
  }, []);

  return (
    <BrowserRouter>
      <PageRouter
        routes={AppRoutes}
        renderNotFound={() => <NotFoundPage />}
      />
    </BrowserRouter>
  );
};

export default App;
