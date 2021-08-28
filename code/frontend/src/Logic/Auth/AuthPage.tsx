import React, { useState } from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import styles from 'Logic/Auth/AuthPage.module.scss';
import globalStyles from 'index.module.scss';
import AppRoutes from 'AppRoutes';
import multiText from 'Resources/MultiLangText/AuthPage.json';
import { multiLang } from 'App';
import { observer } from 'mobx-react';
import PageBorder from 'Logic/PageBorder/PageBorder';

const AuthPage: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageBorder>
      <form className={globalStyles['sol-navigation']}>
        <input
          type="text"
          placeholder="name"
          className={styles.input}
          value={login}
          onChange={(e) => setLogin(e.currentTarget.value)}
        />

        <input
          type="password"
          placeholder="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <ElementsMenu to="/" text={multiLang.text(multiText.authPage.signIn)} onClick={() => alert('not implemented')} />

        <ElementsMenu to="/" text={multiLang.text(multiText.authPage.signUp)} onClick={() => alert('not implemented')} />

        <ElementsMenu to={AppRoutes.homePage.toUrl()} text={multiLang.text(multiText.authPage.backToMenu)} />
      </form>
    </PageBorder>
  );
};

export default observer(AuthPage);
