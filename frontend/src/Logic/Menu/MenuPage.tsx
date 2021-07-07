import React from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import styles from 'Logic/Menu/Menu.module.scss';
import AppRoutes from 'AppRoutes';
import BloodMoon from 'Resources/bloodMoon.jpg';
import Image from 'Components/Image/Image';

/*
 * Menu
 */
const Menu: React.FC = () => (
  <div className={styles.wrapper}>
    <Image
      src={BloodMoon}
      style={{
        zIndex: -50,
        position: 'fixed',
        height: '100%',
      }}
    />
    <ul className={styles.navigation}>
      <ElementsMenu path={AppRoutes.auth.toUrl()} text="Authorization" />
      {/* <ElementsMenu path={AppRoutes.singlePlayer.toUrl()} text="SinglePlayer" /> */}
      {/* <ElementsMenu path={AppRoutes.multiPlayer.toUrl()} text="Multiplayer" /> */}
      <ElementsMenu path={AppRoutes.options.toUrl()} text="Option" />
      <ElementsMenu path={AppRoutes.about.toUrl()} text="About" />
    </ul>
  </div>
);

export default Menu;
