
import React from 'react';
import { observer } from 'mobx-react';
import './BattleScene.css';
import SimpleEnemyView from '../SimpleEnemy';
import { useStore } from '../../../Store/CombineStores';
import HeroView from '../../StupidComponents/Hero';
import SimpleEnemy from '../../../Models/SimpleEnemy';

const BattleScene: React.FC = observer(() => {
    const { enemiesStore, heroStore, levelStore } = useStore();

    return (
        <div className="battle-scene">
            {levelStore.timer}
            {enemiesStore.enemies.map((enemy: SimpleEnemy) => <SimpleEnemyView key={enemy.id} enemy={enemy} hero={heroStore} />)}
            <HeroView hero={heroStore} />
            {levelStore.levelStage}<button onClick={() => levelStore.nextLevelStage()}>nextLevelStage</button>
        </div>
    );
});

export default BattleScene;