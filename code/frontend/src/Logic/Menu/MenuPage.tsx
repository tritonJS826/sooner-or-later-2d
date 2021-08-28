import React from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import globalStyles from 'index.module.scss';
import AppRoutes from 'AppRoutes';
import multiText from 'Resources/MultiLangText/MainMenuPage.json';
import { multiLang } from 'App';
import { observer } from 'mobx-react';
import PageBorder from 'Logic/PageBorder/PageBorder';

/*
 * Menu
 */
const Menu: React.FC = () => (
  <PageBorder>
    <ul className={globalStyles['sol-navigation']}>
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
  </PageBorder>
);

export default observer(Menu);
