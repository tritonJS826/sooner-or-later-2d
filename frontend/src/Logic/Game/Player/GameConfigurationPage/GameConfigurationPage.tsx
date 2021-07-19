import React, { useEffect, useState } from 'react';
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
import Image from 'Components/Image/Image';
import BloodMoon from 'Resources/bloodMoon.jpg';
/*
 * GameConfigurationPage page
 */
const GameConfigurationPage: React.FC = () => {
  const gameConfigurationStore = useLocalStore(() => new GameConfigurationStore());
  const history = useHistory();

  useEffect(() => {
    gameConfigurationStore.loadData();
  }, []);

  const changeHostName = (e: React.FormEvent<HTMLInputElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, hostName: e.currentTarget.value });
  };

  const createGame = async () => {
    const gameSettings = await gameConfigurationStore.createGame();
    const hostId = gameSettings.host.hostName;
    const port = String(gameSettings.port);
    history.push(AppRoutes.preGame.toUrl({ hostId, port }));
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
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, difficulty: Number(e.currentTarget.value) });
  };

  const onBack = () => {
    history.push(AppRoutes.multiplayer.toUrl());
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

      <InputText
        label={multiLang.text(multiText.gameConfiguration.hostName)}
        value={gameConfigurationStore.settings.hostName}
        onChange={changeHostName}
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
