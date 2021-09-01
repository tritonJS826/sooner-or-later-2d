import AppRoutes from 'AppRoutes';
import PageBorder from 'Logic/PageBorder/PageBorder';
import { useHistory } from 'react-router';
import globalStyles from 'index.module.scss';

const NotFoundPage: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <PageBorder
      backButton={{
        text: 'Back to menu',
        onClick: () => history.push(AppRoutes.homePage.toUrl()),
      }}
    >
      <div className={globalStyles['sol-navigation']}>
        Page not found [or under construction]
      </div>
    </PageBorder>
  );
};

export default NotFoundPage;
