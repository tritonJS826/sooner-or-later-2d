
import React from 'react';
import { observer } from 'mobx-react';
import SimpleEnemyView from '../SimpleEnemy';
import { useStore } from '../../../Store/CombineStores';
import HeroView from '../Hero';
import SimpleEnemy from '../../../Models/SimpleEnemy';
import styles from './BattleScene.module.scss';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';

const BattleScene = observer(React.forwardRef<HTMLInputElement>((props, ref) => {
    const { enemiesStore, heroStore, levelStore, gameStore } = useStore();

    return (
        <div className={styles["battle-scene"]}>
            <AnimatedSpan text={String(levelStore.timer)} /><br/>
            <AnimatedSpan text={`level: ${gameStore.currentLevelIndex + 1}`} />
            {enemiesStore.enemies.map((enemy: SimpleEnemy) => <SimpleEnemyView key={enemy.id} ref={ref} enemy={enemy} hero={heroStore} />)}
            <HeroView />
        </div>
    );
}));

export default BattleScene;