import styles from 'Logic/Options/Options.module.scss';
import multiText from 'Resources/MultiLangText/Options.json';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import { multiLang } from 'App';
import { observer } from 'mobx-react';
import AppRoutes from 'AppRoutes';
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodTree.jpeg';

/*
 * Options
 */
const OptionsPage: React.FC = () => {
  const renderLanguages = () => multiLang.languages.map((lang) => (
    <ElementsMenu key={lang.code} text={lang.name} onClick={() => multiLang.setCurrentLanguageByCode(lang.code)} />
  ));

  return (
    <div className={styles.options}>
      <Image
        src={BloodMoon}
        style={{
          zIndex: -50,
          position: 'fixed',
          height: '100%',
          left: 0,
          bottom: 0,
        }}
      />
      <span className={styles.languagesBlock}>{multiLang.text(multiText.options.chooseLanguage)}</span>

      {renderLanguages()}

      <ElementsMenu to={AppRoutes.homePage.toUrl()} text={multiLang.text(multiText.options.backToMenu)} />
    </div>
  );
};

export default observer(OptionsPage);
