import React, { useEffect } from 'react';
import { observer, useLocalStore } from 'mobx-react';
import styles from 'Logic/Game/Player/GameConfigurationPage/GameConfigurationPage.module.scss';
import globalStyles from 'index.module.scss';
import GameConfigurationStore from 'Logic/Game/Player/GameConfigurationPage/GameConfigurationStore';
import InputText from 'Components/InputText';
import InputButton from 'Components/InputButton';
import SelectWithLabel from 'Components/SelectWithLabel/SelectWithLabel';
import { multiLang } from 'App';
import multiText from 'Resources/MultiLangText/GameConfigurationPage.json';
import { useHistory } from 'react-router';
import AppRoutes from 'AppRoutes';
import PageBorder from 'Logic/PageBorder/PageBorder';

interface GameConfigurationPageProps {
  /**
   * 'true' | 'false' | undefined
   */
  multiplayer?: string;
}

/*
 * GameConfigurationPage page
 */
const GameConfigurationPage: React.FC<GameConfigurationPageProps> = (props: GameConfigurationPageProps) => {
  const gameConfigurationStore = useLocalStore(() => new GameConfigurationStore());
  const history = useHistory();

  useEffect(() => {
    gameConfigurationStore.loadData();
  }, []);

  const changeHostName = (e: React.FormEvent<HTMLInputElement>) => {
    gameConfigurationStore.setSettings({ ...gameConfigurationStore.settings, hostName: e.currentTarget.value });
  };

  const createGame = async () => {
    const gameSettings = await gameConfigurationStore.createGame({ multiplayer: !!JSON.parse(`${props.multiplayer}`) });
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

  const back = () => {
    if (JSON.parse(`${props.multiplayer}`)) {
      history.push(AppRoutes.multiplayer.toUrl());
    } else {
      history.push(AppRoutes.homePage.toUrl());
    }
  };

  return (
    <PageBorder>
      <div className={globalStyles['sol-navigation']}>
        {JSON.parse(`${props.multiplayer}`) && (
          <div className={styles.selectBlock}>
            <InputText
              label={multiLang.text(multiText.gameConfiguration.hostName)}
              value={gameConfigurationStore.settings.hostName}
              onChange={changeHostName}
              style={{ width: 200 }}
            />

            <InputText
              label={multiLang.text(multiText.gameConfiguration.maxPlayersAmount)}
              value={gameConfigurationStore.settings.maxPlayers}
              onChange={changeMaxPlayers}
              style={{ width: 200 }}
            />

            <div style={{ width: 200 }} />
          </div>
        )}

        <div className={styles.selectBlock}>
          <SelectWithLabel
            label={multiLang.text(multiText.gameConfiguration.world)}
            options={gameConfigurationStore.optionsWorld}
            style={{ width: 200 }}
            onChange={changeWorld}
          />

          <SelectWithLabel
            label={multiLang.text(multiText.gameConfiguration.level)}
            options={gameConfigurationStore.optionsLevel}
            defaultValue={gameConfigurationStore.settings.level}
            style={{ width: 200 }}
            onChange={changeLevel}
          />

          <SelectWithLabel
            label={multiLang.text(multiText.gameConfiguration.difficulty)}
            options={gameConfigurationStore.optionsWorldDifficulty}
            style={{ width: 200 }}
            onChange={changeDifficulty}
          />
        </div>

        <div className={styles.buttonsBlock}>
          <InputButton
            value={multiLang.text(multiText.gameConfiguration.apply)}
            onClick={createGame}
            style={{ width: 200 }}
          />

          <InputButton
            value={multiLang.text(multiText.gameConfiguration.back)}
            onClick={back}
            style={{ width: 200 }}
          />

          <div style={{width: 200}}></div>
        </div>
      </div>
    </PageBorder>
  );
};
export default observer(GameConfigurationPage);
