import React, { useState } from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import styles from 'Logic/AuthPage/AuthPage.module.scss';
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodMoon.jpg';
import AppRoutes from 'AppRoutes';

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

        <ElementsMenu path="/" text="SIGN IN" />

        <hr style={{ opacity: 0.3 }} />

        <ElementsMenu path="/" text="SIGN UP" />

        <hr style={{ opacity: 0.3 }} />

        <ElementsMenu path={AppRoutes.homePage.toUrl()} text="BACK TO MENU" />
      </form>
    </div>
  );
};

export default AuthPage;
