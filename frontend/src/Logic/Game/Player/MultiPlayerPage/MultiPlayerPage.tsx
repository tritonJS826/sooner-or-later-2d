import React from 'react';
import styles from 'Logic/Game/Player/MultiPlayerPage/MultiPlayerPage.module.scss';
import InputButton from 'Components/InputButton/InputButton';
import SelectWithLabel from 'Components/SelectWithLabel/SelectWithLabel';
import InputText from 'Components/InputText';
import MultiplayerStore from 'Logic/Game/Player/MultiPlayerPage/MultiplayerStore';
import multiText from 'Resources/MultiLangText/MultiplayerPage.json';
import { multiLang } from 'App';
import { useLocalStore } from 'mobx-react';
import { useHistory } from 'react-router';
import AppRoutes from 'AppRoutes';
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodMoon.jpg';
import { Difficulty } from 'Model/Difficulty';

/*
 * MultiPlayer page
 */
const MultiPlayer: React.FC = () => {
  const history = useHistory();
  const multiplayerStore = useLocalStore(() => new MultiplayerStore());

  const testOptions = [{
    key: Difficulty.ALL,
    data: Difficulty.ALL,
    value: Difficulty.ALL,
  }, {
    key: Difficulty.EASY,
    data: Difficulty.EASY,
    value: Difficulty.EASY,
  }, {
    key: Difficulty.HARD,
    data: Difficulty.HARD,
    value: Difficulty.HARD,
  }];

  return (
    <div className={styles.wrapper}>
      <Image
        src={BloodMoon}
        style={{
          zIndex: -50,
          position: 'fixed',
          height: '100%',
          alignSelf: 'center',
        }}
      />

      <div className={styles['action-block']}>
        <InputButton
          value={multiLang.text(multiText.multiplayerPage.createHost)}
          onClick={() => history.push(AppRoutes.gameConfiguration.toUrl())}
        />
        <InputButton
          value={multiLang.text(multiText.multiplayerPage.back)}
          onClick={() => history.push(AppRoutes.homePage.toUrl())}
        />
      </div>

      <div className={styles.filter}>
        <InputText
          value={multiplayerStore.filter.id}
          label={multiLang.text(multiText.multiplayerPage.filter.id)}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
        />

        <InputText
          value={multiplayerStore.filter.word}
          label={multiLang.text(multiText.multiplayerPage.filter.world)}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
        />

        <InputText
          value={multiplayerStore.filter.hostName}
          label={multiLang.text(multiText.multiplayerPage.filter.hostName)}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
        />

        <SelectWithLabel
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          label={multiLang.text(multiText.multiplayerPage.filter.difficulty)}
          options={testOptions}
        />
      </div>

      <div className={styles.table}>TABLE</div>
    </div>
  );
};
export default MultiPlayer;
