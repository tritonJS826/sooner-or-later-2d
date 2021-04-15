
import React from 'react';
import { observer } from 'mobx-react';
import SimpleEnemyView from '../SimpleEnemy';
import { useStore } from '../../../Store/CombineStores';
import HeroView from '../Hero';
import SimpleEnemy from '../../../Models/SimpleEnemy';
import styles from './BattleScene.module.scss';

const BattleScene: React.FC = observer(() => {
    const { enemiesStore, heroStore, levelStore } = useStore();

    return (
        <div className={styles["battle-scene"]}>
            {levelStore.timer}
            {enemiesStore.enemies.map((enemy: SimpleEnemy) => <SimpleEnemyView key={enemy.id} enemy={enemy} hero={heroStore} />)}
            <HeroView />
            {levelStore.levelStage}
        </div>
    );
});

export default BattleScene;