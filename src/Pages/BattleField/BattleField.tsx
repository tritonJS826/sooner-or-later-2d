
import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import BattleScene from '../../Components/CleverComponents/BattleScene';
import HeroInfo from '../../Components/CleverComponents/HeroInfo';
import TargetInfo from '../../Components/CleverComponents/TargetInfo';
import './BattleField.css';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import gameStore from '../../Store/GameStore';

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
            <div className="battle-field" ref={battleField}>
                <BattleScene />
                <HeroInfo />
                <TargetInfo />
                <input type="button" value="FULL_SCREEN" onClick={openFullScreen} className="button not-on-full-screen" />
                <Link to={routes.base} className={'not-on-full-screen'}>Menu</Link>
            </div>
        </>
    );
});

export default BattleField;