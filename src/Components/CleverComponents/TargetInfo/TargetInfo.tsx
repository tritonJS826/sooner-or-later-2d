
import React from 'react';
import { observer } from 'mobx-react';
import './TargetInfo.css';
import { useStore } from '../../../Store/CombineStores';

const HeroInfo: React.FC = (observer(() => {
    const {
        heroStore,
        enemiesStore,
    } = useStore();

    return (
        <div className="target-info">
            targetId={heroStore.targetId}
            frontSide={enemiesStore.getEnemyById(heroStore.targetId)?.frontSide}
        </div>
    );
}));

export default HeroInfo;