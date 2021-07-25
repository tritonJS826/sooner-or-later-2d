import React from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import styles from 'Logic/Menu/Menu.module.scss';
import AppRoutes from 'AppRoutes';
import BloodMoon from 'Resources/bloodMoon.jpg';
import Image from 'Components/Image/Image';
import multiText from 'Resources/MultiLangText/MainMenuPage.json';
import { multiLang } from 'App';
import { observer } from 'mobx-react';

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
      <ElementsMenu
        to={AppRoutes.auth.toUrl()}
        text={multiLang.text(multiText.mainMenuPage.authorization)}
      />
      <ElementsMenu
        to={AppRoutes.gameConfiguration.toUrl({ multiplayer: 'false' })}
        text={multiLang.text(multiText.mainMenuPage.singlePlayer)}
      />
      <ElementsMenu
        to={AppRoutes.multiplayer.toUrl()}
        text={multiLang.text(multiText.mainMenuPage.multiplayer)}
      />
      <ElementsMenu
        to={AppRoutes.options.toUrl()}
        text={multiLang.text(multiText.mainMenuPage.options)}
      />
      <ElementsMenu
        to={AppRoutes.about.toUrl()}
        text={multiLang.text(multiText.mainMenuPage.about)}
      />
    </ul>
  </div>
);

export default observer(Menu);
