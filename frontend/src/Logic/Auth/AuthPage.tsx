import React, { useState } from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import styles from 'Logic/Auth/AuthPage.module.scss';
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodMoon.jpg';
import AppRoutes from 'AppRoutes';
import multiText from 'Resources/MultiLangText/AuthPage.json';
import { multiLang } from 'App';
import { observer } from 'mobx-react';

const AuthPage: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.wrapper}>
      <Image
        src={BloodMoon}
        style={{
          zIndex: -50,
          position: 'fixed',
          height: '100%',
        }}
      />

      <form className={styles.form}>
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

        <ElementsMenu to="/" text={multiLang.text(multiText.authPage.signIn)} />

        <hr style={{ opacity: 0.3 }} />

        <ElementsMenu to="/" text={multiLang.text(multiText.authPage.signUp)} />

        <hr style={{ opacity: 0.3 }} />

        <ElementsMenu to={AppRoutes.homePage.toUrl()} text={multiLang.text(multiText.authPage.backToMenu)} />
      </form>
    </div>
  );
};

export default observer(AuthPage);
