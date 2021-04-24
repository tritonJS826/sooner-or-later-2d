import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import BattleScene from '../../Components/CleverComponents/BattleScene';
import HeroInfo from '../../Components/CleverComponents/HeroInfo';
import TargetInfo from '../../Components/CleverComponents/TargetInfo';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import gameStore from '../../Store/GameStore';
import styles from './BattleField.module.scss';
import { ELevelStage } from 'Store/LevelStore';
import LevelFinish from 'Components/CleverComponents/LevelFinish';
import LevelIntro from 'Components/CleverComponents/LevelIntro';
import LevelFail from 'Components/CleverComponents/LevelFail';
import { useStore } from 'Store/CombineStores';
import InputButton from 'Components/BaseComponents/InputButton';

const BattleField: React.FC = observer(() => {
    const { levelStore, heroesStore } = useStore();
    const battleField = useRef<HTMLDivElement>(null);

    const openFullScreen = () => {
        battleField.current?.requestFullscreen();
    };

    const onMenu = () => {
        heroesStore.resetAllHeroes();
        levelStore.enemiesStore.killAllEnemies();
    };

    useEffect(() => {
        gameStore.startLevel();
    }, []);

    const inputTextRef = React.createRef<HTMLInputElement>();

    // const inputTextRef = React.useRef<HTMLInputElement>(null);

    const renderGame = () => {
        return (<>
            <BattleScene ref={inputTextRef} />
            <HeroInfo ref={inputTextRef} />
            <TargetInfo />
            <div className={styles.buttons}>
                <InputButton value="Full screen" onClick={openFullScreen} className={`${styles["button"]} ${styles["not-on-full-screen"]}`} />
                <Link to={routes.base} className={`${styles["button"]}`}>
                    <InputButton
                        value="Menu"
                        onClick={onMenu}
                        className={styles["button"]} />
                </Link>
            </div>
        </>)
    };

    return (
        <div className={styles["battle-field"]} ref={battleField}>
            {levelStore.levelStage === ELevelStage.introduction && <LevelIntro />}
            {levelStore.levelStage === ELevelStage.levelCompleted && <LevelFinish />}
            {levelStore.levelStage === ELevelStage.game && renderGame()}
            {levelStore.levelStage === ELevelStage.heroDied && <LevelFail />}
        </div>
    );
});

export default BattleField;