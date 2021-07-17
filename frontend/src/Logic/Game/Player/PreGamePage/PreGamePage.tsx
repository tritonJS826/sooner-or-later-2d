import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from 'Logic/Game/Player/PreGamePage/PreGamePage.module.scss';
import InputButton from 'Components/InputButton';
import { multiLang } from 'App';
import multiText from 'Resources/MultiLangText/PreGamePage.json';
import AppRoutes from 'AppRoutes';
import { observer, useLocalStore } from 'mobx-react';
import PreGameStore from 'Logic/Game/Player/PreGamePage/PreGameStore';
import PlayerStatus from 'Model/PlayerStatus';
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodMoon.jpg';

/**
 * GameConfiguration page
 */
const GameConfiguration: React.FC = () => {
  const history = useHistory();
  const preGameStore = useLocalStore(() => new PreGameStore());
  useEffect(() => {
    preGameStore.loadData();
  }, []);

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
          value={multiLang.text(multiText.gameConfiguration.ready)}
          onClick={preGameStore.setPlayerReady}
        />
        <InputButton
          value={multiLang.text(multiText.gameConfiguration.back)}
          onClick={() => history.push(AppRoutes.multiplayer.toUrl())}
        />
      </div>

      <h3>{multiLang.text(multiText.gameConfiguration.players)}</h3>
      <div className={styles.table}>
        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.table.playerName)}</div>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.table.status)}</div>
        </div>

        {preGameStore.players.map((player) => (
          <div className={styles['table-row']} key={player.id}>
            <div className={styles.cell}>{player.name}</div>
            <div className={styles.cell}>
              {player.status === PlayerStatus.READY
                ? multiLang.text(multiText.gameConfiguration.table.ready)
                : multiLang.text(multiText.gameConfiguration.table.notReady)}
            </div>
          </div>
        ))}
      </div>

      <h3>{multiLang.text(multiText.gameConfiguration.description)}</h3>
      <div className={styles.table}>
        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.descriptionTable.hostName)}</div>
          <div className={styles.cell}>{preGameStore.hostDescription.hostName}</div>
        </div>

        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.descriptionTable.world)}</div>
          <div className={styles.cell}>{preGameStore.hostDescription.world}</div>
        </div>

        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.descriptionTable.level)}</div>
          <div className={styles.cell}>{preGameStore.hostDescription.level}</div>
        </div>

        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.descriptionTable.difficulty)}</div>
          <div className={styles.cell}>{preGameStore.hostDescription.difficulty}</div>
        </div>

        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.gameConfiguration.descriptionTable.playersAmount)}</div>
          <div className={styles.cell}>{preGameStore.hostDescription.playersAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(GameConfiguration);
