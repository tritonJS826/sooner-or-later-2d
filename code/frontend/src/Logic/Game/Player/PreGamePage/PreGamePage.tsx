import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from 'Logic/Game/Player/PreGamePage/PreGamePage.module.scss';
import globalStyles from 'index.module.scss';
import InputButton from 'Components/InputButton';
import { multiLang } from 'App';
import multiText from 'Resources/MultiLangText/PreGamePage.json';
import AppRoutes from 'AppRoutes';
import { observer, useLocalObservable } from 'mobx-react';
import PreGameStore from 'Logic/Game/Player/PreGamePage/PreGameStore';
import PlayerStatus from 'Model/PlayerStatus';
import PageBorder from 'Logic/PageBorder/PageBorder';
import Space from 'Components/Space/Space';
import { gameStore } from 'Logic/Game/GameStore';

interface PreGameProps {
  hostId: string | undefined;
  port: string | undefined; // it prop used in LWSS like "id", it's better to use hostId instead
 }

/**
 * PreGame page
 */
const PreGame: React.FC<PreGameProps> = (props: PreGameProps) => {
  const history = useHistory();
  const preGameStore = useLocalObservable(() => new PreGameStore());

  useEffect(() => {
    if (props.port && props.hostId) {
      preGameStore.connectToLWSS(props.port); // it's better to use just hostID instead of port
      preGameStore.connectToGWSS(props.hostId);
    }
    return preGameStore.closeConnections;
  }, []);

  return (
    <PageBorder
      backButton={{
        text: multiLang.text(multiText.preGamePage.toMainMenu),
        onClick: () => history.push(AppRoutes.homePage.toUrl()),
      }}
    >
      <div className={globalStyles['sol-navigation']}>

        <h3>{multiLang.text(multiText.preGamePage.description)}</h3>
        <div className={styles.table}>
          <div className={styles['table-row']}>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.descriptionTable.hostName)}</div>
            <div className={styles.cell}>{preGameStore.hostDescription.hostName}</div>
          </div>

          <div className={styles['table-row']}>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.descriptionTable.world)}</div>
            <div className={styles.cell}>{preGameStore.hostDescription.world}</div>
          </div>

          <div className={styles['table-row']}>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.descriptionTable.level)}</div>
            <div className={styles.cell}>{preGameStore.hostDescription.level}</div>
          </div>

          <div className={styles['table-row']}>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.descriptionTable.difficulty)}</div>
            <div className={styles.cell}>{preGameStore.hostDescription.difficulty}</div>
          </div>

          <div className={styles['table-row']}>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.descriptionTable.playersAmount)}</div>
            <div className={styles.cell}>{gameStore.players.length}</div>
          </div>

          <Space vertical />
          <div className={styles['action-block']}>
            <InputButton
              value={multiLang.text(multiText.preGamePage.ready)}
              onClick={preGameStore.isPlayerReady
                ? preGameStore.setPlayerNotReady
                : preGameStore.setPlayerReady}
            />
          </div>
        </div>

        <h3>{multiLang.text(multiText.preGamePage.players)}</h3>
        <div className={styles.table} style={{ marginBottom: 'auto' }}>
          <div className={styles['table-row']}>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.table.playerName)}</div>
            <div className={styles.cell}>{multiLang.text(multiText.preGamePage.table.status)}</div>
          </div>

          {gameStore.players.map((player) => (
            <div className={styles['table-row']} key={player.id}>
              <div className={styles.cell}>{player.name}</div>
              <div className={styles.cell}>
                {player.status === PlayerStatus.READY
                  ? multiLang.text(multiText.preGamePage.table.ready)
                  : multiLang.text(multiText.preGamePage.table.notReady)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageBorder>
  );
};

export default observer(PreGame);
