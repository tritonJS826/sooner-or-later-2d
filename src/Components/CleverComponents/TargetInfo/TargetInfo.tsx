
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './TargetInfo.module.scss';

const HeroInfo: React.FC = observer(() => {
    const {
        heroStore,
        enemiesStore,
    } = useStore();

    const getTarget = () => enemiesStore.getEnemyById(heroStore.targetId);

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