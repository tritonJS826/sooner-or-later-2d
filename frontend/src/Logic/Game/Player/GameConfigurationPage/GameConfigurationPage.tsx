import React, { useEffect } from 'react';
import { observer, useLocalStore } from 'mobx-react';
import styles from 'Logic/Game/Player/GameConfigurationPage/GameConfigurationPage.module.scss';
import GameConfigurationStore from 'Logic/Game/Player/GameConfigurationPage/GameConfigurationStore';
import InputText from 'Components/InputText';
import InputButton from 'Components/InputButton';
import SelectWithLabel from 'Components/SelectWithLabel/SelectWithLabel';
import { multiLang } from 'App';
import multiText from 'Resources/MultiLangText/GameConfigurationPage.json';
import { useHistory } from 'react-router';
import AppRoutes from 'AppRoutes';
import { Difficulty } from 'Model/Difficulty';

/*
 * GameConfigurationPage page
 */
const GameConfigurationPage: React.FC = () => {
  const gameConfigurationStore = useLocalStore(() => new GameConfigurationStore());
  const history = useHistory();

  useEffect(() => {
    gameConfigurationStore.loadData();
  }, []);

  const changeRoomName = (e: React.FormEvent<HTMLInputElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, roomName: e.currentTarget.value });
  };

  const createGame = () => {
    history.push(AppRoutes.preGame.toUrl());
    gameConfigurationStore.createGame();
  };

  const changeWorld = (e: React.ChangeEvent<HTMLSelectElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, worldId: e.currentTarget.value });
  };

  const changeMaxPlayers = (e: React.FormEvent<HTMLInputElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, maxPlayers: Number(e.currentTarget.value) });
  };

  const changeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, level: Number(e.currentTarget.value) });
  };

  const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, difficulty: e.currentTarget.value as Difficulty });
  };

  const onBack = () => {
    history.push(AppRoutes.multiplayer.toUrl());
  };

  return (
    <div className={styles.wrapper}>
      <InputText
        label={multiLang.text(multiText.gameConfiguration.roomName)}
        value={gameConfigurationStore.settings.roomName}
        onChange={changeRoomName}
        style={{ marginRight: 20, marginTop: 10, width: 200 }}
      />

      <div className={styles.selectBlock}>

        <SelectWithLabel
          label={multiLang.text(multiText.gameConfiguration.world)}
          options={gameConfigurationStore.optionsWorld}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          onChange={changeWorld}
        />

        <InputText
          label={multiLang.text(multiText.gameConfiguration.maxPlayersAmount)}
          value={gameConfigurationStore.settings.maxPlayers}
          onChange={changeMaxPlayers}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
        />

        <SelectWithLabel
          label={multiLang.text(multiText.gameConfiguration.level)}
          options={gameConfigurationStore.optionsLevel}
          defaultValue={gameConfigurationStore.settings.level}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          onChange={changeLevel}
        />

        <SelectWithLabel
          label={multiLang.text(multiText.gameConfiguration.difficulty)}
          options={gameConfigurationStore.optionsWorldDifficulty}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
          onChange={changeDifficulty}
        />
      </div>

      <div className={styles.buttonsBlock}>
        <InputButton
          value={multiLang.text(multiText.gameConfiguration.apply)}
          onClick={createGame}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
        />

        <InputButton
          value={multiLang.text(multiText.gameConfiguration.back)}
          onClick={onBack}
          style={{ marginRight: 20, marginTop: 10, width: 200 }}
        />
      </div>
    </div>
  );
};
export default observer(GameConfigurationPage);
