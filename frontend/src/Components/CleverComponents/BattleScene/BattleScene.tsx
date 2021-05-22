import React from 'react';
import { observer } from 'mobx-react';
import SimpleEnemyView from '../SimpleEnemy';
import { useStore } from '../../../Store/CombineStores';
import HeroesView from '../Heroes';
import SimpleEnemy from '../../../Models/SimpleEnemy';
import styles from './BattleScene.module.scss';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';

const BattleScene = observer(React.forwardRef<HTMLInputElement>((props, ref) => {
    const { enemiesStore, levelStore, gameStore } = useStore();

    // это на стадии добавления enemies
    // const getRandomHero = () => {
    //     const maxIndex = heroesStore.heroes.length - 1;

    //     const randomIndex = Math.round(Math.random() * maxIndex);

    //     return heroesStore.heroes[randomIndex];
    // };
    

    return (
        <div className={styles["battle-scene"]}>
            <AnimatedSpan text={String(levelStore.timer)} /><br/>
            <AnimatedSpan text={`level: ${gameStore.currentLevelIndex + 1}`} />
            {/* проблемы в стилях захвата вероятно в следующей строке */}
            {enemiesStore.enemies.map((enemy: SimpleEnemy) => <SimpleEnemyView key={enemy.id} ref={ref} enemy={enemy} />)}
            <HeroesView />
        </div>
    );
}));

export default BattleScene;