import React, { useEffect } from 'react';
import styles from 'Logic/Game/Player/MultiPlayerPage/MultiPlayerPage.module.scss';
import InputButton from 'Components/InputButton/InputButton';
import SelectWithLabel from 'Components/SelectWithLabel/SelectWithLabel';
import InputText from 'Components/InputText';
import MultiplayerStore from 'Logic/Game/Player/MultiPlayerPage/MultiplayerStore';
import multiText from 'Resources/MultiLangText/MultiplayerPage.json';
import { multiLang } from 'App';
import { observer, useLocalStore } from 'mobx-react';
import { useHistory } from 'react-router';
import AppRoutes from 'AppRoutes';
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodMoon.jpg';
import Difficulty from 'Model/Difficulty';
import { Link } from 'react-router-dom';

/*
 * MultiPlayer page
 */
const MultiPlayer: React.FC = () => {
  const history = useHistory();
  const multiplayerStore = useLocalStore(() => new MultiplayerStore());

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5002');
    multiplayerStore.loadData(ws);
    return multiplayerStore.closeConnections;
  }, []);

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

  const onChangeId = (e: React.FormEvent<HTMLInputElement>) => {
    multiplayerStore.setFilter({
      ...multiplayerStore.filter,
      id: e.currentTarget.value,
    });
  };

  const onChangeHostName = (e: React.FormEvent<HTMLInputElement>) => {
    multiplayerStore.setFilter({
      ...multiplayerStore.filter,
      hostName: e.currentTarget.value,
    });
  };

  const onChangeWorld = (e: React.FormEvent<HTMLInputElement>) => {
    multiplayerStore.setFilter({
      ...multiplayerStore.filter,
      world: e.currentTarget.value,
    });
  };

  const onChangeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    multiplayerStore.setFilter({
      ...multiplayerStore.filter,
      difficulty: e.currentTarget.value as Difficulty,
    });
  };

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
          onChange={onChangeId}
        />

        <InputText
          value={multiplayerStore.filter.world}
          label={multiLang.text(multiText.multiplayerPage.filter.world)}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          onChange={onChangeWorld}
        />

        <InputText
          value={multiplayerStore.filter.hostName}
          label={multiLang.text(multiText.multiplayerPage.filter.hostName)}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          onChange={onChangeHostName}
        />

        <SelectWithLabel
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          label={multiLang.text(multiText.multiplayerPage.filter.difficulty)}
          options={testOptions}
          onChange={onChangeDifficulty}
        />
      </div>

      <div className={styles.table}>
        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.multiplayerPage.filter.id)}</div>
          <div className={styles.cell}>{multiLang.text(multiText.multiplayerPage.filter.world)}</div>
          <div className={styles.cell}>{multiLang.text(multiText.multiplayerPage.filter.hostName)}</div>
          <div className={styles.cell}>{multiLang.text(multiText.multiplayerPage.filter.difficulty)}</div>
          <div className={styles.cell}>{multiLang.text(multiText.multiplayerPage.table.action)}</div>
        </div>

        {multiplayerStore.tableDataWithFilter.map((rowData) => (
          <div className={styles['table-row']} key={rowData.id}>
            <div className={styles.cell}>{rowData.id}</div>
            <div className={styles.cell}>{rowData.world}</div>
            <div className={styles.cell}>{rowData.hostName}</div>
            <div className={styles.cell}>{rowData.difficulty}</div>
            <div className={styles.cell}>
              <Link to={AppRoutes.preGame.toUrl({ hostId: 'test', port: 'test' })}>
                {multiLang.text(multiText.multiplayerPage.join)}
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* Players watch(dev-test): {multiplayerStore.playersAvailable} */}
    </div>
  );
};
export default observer(MultiPlayer);
