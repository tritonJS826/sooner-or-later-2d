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

interface PreGameProps {
  hostId: string | undefined;
  port: string | undefined;
}

/**
 * PreGame page
 */
const PreGame: React.FC<PreGameProps> = (props: PreGameProps) => {
  const history = useHistory();
  console.log('PreGameProps', props)
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
          value={multiLang.text(multiText.preGamePage.ready)}
          onClick={preGameStore.setPlayerReady}
        />
        <InputButton
          value={multiLang.text(multiText.preGamePage.back)}
          onClick={() => history.push(AppRoutes.multiplayer.toUrl())}
        />
      </div>

      <h3>{multiLang.text(multiText.preGamePage.players)}</h3>
      <div className={styles.table}>
        <div className={styles['table-row']}>
          <div className={styles.cell}>{multiLang.text(multiText.preGamePage.table.playerName)}</div>
          <div className={styles.cell}>{multiLang.text(multiText.preGamePage.table.status)}</div>
        </div>

        {preGameStore.players.map((player) => (
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
          <div className={styles.cell}>{preGameStore.hostDescription.playersAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(PreGame);
