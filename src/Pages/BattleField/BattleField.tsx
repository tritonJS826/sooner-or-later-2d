
import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import BattleScene from '../../Components/CleverComponents/BattleScene';
import HeroInfo from '../../Components/CleverComponents/HeroInfo';
import TargetInfo from '../../Components/CleverComponents/TargetInfo';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import gameStore from '../../Store/GameStore';
import styles from './BattleField.module.scss';

const BattleField: React.FC = observer(() => {
    const battleField = useRef<HTMLDivElement>(null);

    const openFullScreen = () => {
        battleField.current?.requestFullscreen();
    };

    useEffect(() => {
        gameStore.startLevel();
    });

    return (
        <>
            <div className={styles["battle-field"]} ref={battleField}>
                <BattleScene />
                <HeroInfo />
                <TargetInfo />
                <input type="button" value="FULL_SCREEN" onClick={openFullScreen} className={`${styles["button"]} ${styles["not-on-full-screen"]}`} />
                <Link to={routes.base} className={styles["not-on-full-screen"]}>Menu</Link>
            </div>
        </>
    );
});

export default BattleField;