import styles from 'Logic/Options/Options.module.scss';
import globalStyles from 'index.module.scss';
import multiText from 'Resources/MultiLangText/Options.json';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import { multiLang } from 'App';
import { observer } from 'mobx-react';
import AppRoutes from 'AppRoutes';
import PageBorder from 'Logic/PageBorder/PageBorder';

/*
 * Options
 */
const OptionsPage: React.FC = () => {
  const renderLanguages = () => multiLang.languages.map((lang) => (
    <ElementsMenu key={lang.code} text={lang.name} onClick={() => multiLang.setCurrentLanguageByCode(lang.code)} />
  ));

  return (
    <PageBorder>
      <ul className={globalStyles['sol-navigation']}>
        <span className={styles.languagesBlock}>{multiLang.text(multiText.options.chooseLanguage)}</span>

        {renderLanguages()}

        <ElementsMenu to={AppRoutes.homePage.toUrl()} text={multiLang.text(multiText.options.backToMenu)} />
      </ul>
    </PageBorder>
  );
};

export default observer(OptionsPage);
