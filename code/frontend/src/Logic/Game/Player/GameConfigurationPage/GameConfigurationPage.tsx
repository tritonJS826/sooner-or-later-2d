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
import Space from 'Components/Space/Space';

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
    <PageBorder
      backButton={{
        text: multiLang.text(multiText.gameConfiguration.back),
        onClick: back,
      }}
    >
      <div className={globalStyles['sol-navigation']}>
        <div className={globalStyles['sol-row']} style={{ marginBottom: 'auto' }}>

          <div className={globalStyles['sol-column']}>
            {JSON.parse(`${props.multiplayer}`) && (
            <div className={styles.selectBlock}>
              <InputText
                label={multiLang.text(multiText.gameConfiguration.hostName)}
                value={gameConfigurationStore.settings.hostName}
                onChange={changeHostName}
                style={{ width: 200 }}
              />

              <Space vertical />

              <InputText
                label={multiLang.text(multiText.gameConfiguration.maxPlayersAmount)}
                value={gameConfigurationStore.settings.maxPlayers}
                onChange={changeMaxPlayers}
                style={{ width: 200 }}
              />

              <Space vertical />
            </div>
            )}

            <div className={styles.selectBlock}>
              <SelectWithLabel
                label={multiLang.text(multiText.gameConfiguration.world)}
                options={gameConfigurationStore.optionsWorld}
                style={{ width: 200 }}
                onChange={changeWorld}
              />

              <Space vertical />

              <SelectWithLabel
                label={multiLang.text(multiText.gameConfiguration.level)}
                options={gameConfigurationStore.optionsLevel}
                defaultValue={gameConfigurationStore.settings.level}
                style={{ width: 200 }}
                onChange={changeLevel}
              />

              <Space vertical />

              <SelectWithLabel
                label={multiLang.text(multiText.gameConfiguration.difficulty)}
                options={gameConfigurationStore.optionsWorldDifficulty}
                style={{ width: 200 }}
                onChange={changeDifficulty}
              />
            </div>

          </div>

          <Space horizontal />

          <div className={globalStyles['sol-column']} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: 'auto', maxWidth: 300, margin: 'auto' }}>
              {gameConfigurationStore.currentWorldDescription}
            </div>

            <InputButton
              value={multiLang.text(multiText.gameConfiguration.apply)}
              onClick={createGame}
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>
    </PageBorder>
  );
};
export default observer(GameConfigurationPage);
