
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
    const { levelStore } = useStore();
    const battleField = useRef<HTMLDivElement>(null);

    const openFullScreen = () => {
        battleField.current?.requestFullscreen();
    };

    useEffect(() => {
        gameStore.startLevel();
    }, []);

    if (levelStore.levelStage === ELevelStage.introduction) return <LevelIntro />;
    if (levelStore.levelStage === ELevelStage.levelCompleted) return <LevelFinish />;

    if (levelStore.levelStage === ELevelStage.game) return (
        <>
            <div className={styles["battle-field"]} ref={battleField}>
                <BattleScene />
                <HeroInfo />
                <TargetInfo />
                <div className={styles.buttons}>
                    <InputButton value="Full screen" onClick={openFullScreen} className={`${styles["button"]} ${styles["not-on-full-screen"]}`} />
                    <Link to={routes.base} className={`${styles["not-on-full-screen"]} ${styles["button"]}`}>Menu</Link>
                </div>
            </div>
        </>
    );

    if (levelStore.levelStage === ELevelStage.heroDied) return <LevelFail />;

    return (<span>Strange levelStage: {levelStore.levelStage}</span>);


});

export default BattleField;