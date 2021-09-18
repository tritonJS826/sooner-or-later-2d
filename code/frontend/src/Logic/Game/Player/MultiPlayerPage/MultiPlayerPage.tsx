import React, { useEffect } from 'react';
import styles from 'Logic/Game/Player/MultiPlayerPage/MultiPlayerPage.module.scss';
import globalStyles from 'index.module.scss';
import InputButton from 'Components/InputButton/InputButton';
import SelectWithLabel from 'Components/SelectWithLabel/SelectWithLabel';
import InputText from 'Components/InputText';
import MultiplayerStore from 'Logic/Game/Player/MultiPlayerPage/MultiplayerStore';
import multiText from 'Resources/MultiLangText/MultiplayerPage.json';
import { multiLang } from 'App';
import { observer, useLocalStore } from 'mobx-react';
import { useHistory } from 'react-router';
import AppRoutes from 'AppRoutes';
import Difficulty from 'Model/Difficulty';
import { Link } from 'react-router-dom';
import PageBorder from 'Logic/PageBorder/PageBorder';
import Space from 'Components/Space/Space';
import { gql, useApolloClient } from '@apollo/client';

const GET_WORLDS = gql`
  query GetWorlds {
    worlds {
      id
      name
      levels {
        id
        title
      }
    }
  }
`;

/*
 * MultiPlayer page
 */
const MultiPlayer: React.FC = () => {
  const history = useHistory();
  const multiplayerStore = useLocalStore(() => new MultiplayerStore());
  const client = useApolloClient();

  useEffect(() => {
    multiplayerStore.connectToLWSS();
    const worldsData = client.query({ query: GET_WORLDS });
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
    <PageBorder
      backButton={{
        text: multiLang.text(multiText.multiplayerPage.back),
        onClick: () => history.push(AppRoutes.homePage.toUrl()),
      }}
    >
      <div className={globalStyles['sol-navigation']}>
        <div className={globalStyles['sol-row']}>
          <div className={styles.filter}>
            <InputText
              value={multiplayerStore.filter.id}
              label={multiLang.text(multiText.multiplayerPage.filter.id)}
              style={{ width: 200 }}
              onChange={onChangeId}
            />

            <Space horizontal />

            <InputText
              value={multiplayerStore.filter.world}
              label={multiLang.text(multiText.multiplayerPage.filter.world)}
              style={{ width: 200 }}
              onChange={onChangeWorld}
            />

            <Space horizontal />

            <InputText
              value={multiplayerStore.filter.hostName}
              label={multiLang.text(multiText.multiplayerPage.filter.hostName)}
              style={{ width: 200 }}
              onChange={onChangeHostName}
            />

            <Space horizontal />

            <SelectWithLabel
              style={{ width: 200 }}
              label={multiLang.text(multiText.multiplayerPage.filter.difficulty)}
              options={testOptions}
              onChange={onChangeDifficulty}
            />
          </div>

        </div>

        <Space vertical />

        <div className={styles.table} style={{ marginBottom: 'auto' }}>
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
                <Link className={styles.link} to={AppRoutes.preGame.toUrl({ hostId: rowData.id, port: rowData.port })}>
                  {multiLang.text(multiText.multiplayerPage.join)}
                </Link>
              </div>

            </div>
          ))}

          <Space vertical />

          <div className={styles['action-block']}>
            <InputButton
              value={multiLang.text(multiText.multiplayerPage.createHost)}
              onClick={() => history.push(AppRoutes.gameConfiguration.toUrl({ multiplayer: 'true' }))}
            />
          </div>
        </div>

        Players connected to LWSS(dev-test):
        {' '}
        {multiplayerStore.playersAvailable}
      </div>
    </PageBorder>
  );
};
export default observer(MultiPlayer);
