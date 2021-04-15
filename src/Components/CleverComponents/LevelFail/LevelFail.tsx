
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './LevelFail.module.scss';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';
import Image from 'Components/BaseComponents/Image';

const LevelFail: React.FC = (observer(() => {
    const {
        levelStore,
        gameStore,
    } = useStore();

    return (
        <div className={styles["level-finish"]}>
            <AnimatedSpan text={levelStore.failText} />
            <Image src={levelStore.failImg ?? undefined} />
            <InputButton value="nextLevelStage" onClick={() => gameStore.onFailLevel()} />
        </div>
    );
}));

export default LevelFail;