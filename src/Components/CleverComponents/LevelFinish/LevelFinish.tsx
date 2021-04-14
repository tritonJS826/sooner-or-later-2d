
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './LevelFinish.module.scss';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';

const LevelFinish: React.FC = (observer(() => {
    const {
        levelStore,
    } = useStore();

    return (
        <div className={styles["level-finish"]}>
            <AnimatedSpan text={levelStore.finishText} />
            <InputButton value="nextLevelStage" onClick={() => levelStore.nextLevelStage()} />
        </div>
    );
}));

export default LevelFinish;