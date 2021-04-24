
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './TargetInfo.module.scss';

const HeroInfo: React.FC = observer(() => {
    const {
        heroesStore,
        enemiesStore,
    } = useStore();

    // тут конечно нужно исправить, чтоб у каждого свой герой был
    const yourHero = heroesStore.heroes[0]

    const getTarget = () => enemiesStore.getEnemyById(yourHero.targetId);

    const isTargetAlive = () => getTarget()?.health ?? 0 > 1;

    return (
        <div className={styles["target-info"]}>
            <span className={styles["target-info__line"]}>
            {isTargetAlive() && getTarget()?.frontSide}
            </span>
        </div>
    );
});

export default HeroInfo;