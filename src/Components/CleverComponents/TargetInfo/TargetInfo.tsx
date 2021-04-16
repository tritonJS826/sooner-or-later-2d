
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './TargetInfo.module.scss';

const HeroInfo: React.FC = (observer(() => {
    const {
        heroStore,
        enemiesStore,
    } = useStore();

    return (
        <div className={styles["target-info"]}>
            <span className={styles["target-info__line"]}>
            {enemiesStore.getEnemyById(heroStore.targetId)?.frontSide}
            </span>
        </div>
    );
}));

export default HeroInfo;