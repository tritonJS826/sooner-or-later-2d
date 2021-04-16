
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';
import Image from 'Components/BaseComponents/Image';
import styles from './LevelFail.module.scss';

const LevelFail: React.FC = observer(() => {
    const {
        levelStore,
        gameStore,
    } = useStore();

    return (
        <div className={styles["level-fail"]}>
            <AnimatedSpan text={levelStore.failText} />
            <Image src={levelStore.failImg ?? undefined} />
            <InputButton value="nextLevelStage" autoFocus onClick={() => gameStore.levelStore.nextLevelStage()} />
        </div>
    );
});

export default LevelFail;