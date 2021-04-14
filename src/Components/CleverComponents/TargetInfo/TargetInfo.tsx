
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
            targetId={heroStore.targetId}
            frontSide={enemiesStore.getEnemyById(heroStore.targetId)?.frontSide}
        </div>
    );
}));

export default HeroInfo;