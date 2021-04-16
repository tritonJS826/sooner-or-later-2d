
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';
import Image from 'Components/BaseComponents/Image';
import styles from './LevelFinish.module.scss';

const LevelFinish: React.FC = (observer(() => {
    const {
        levelStore,
    } = useStore();

    return (
        <div className={styles["level-finish"]}>
            <AnimatedSpan text={levelStore.finishText} />
            <Image src={levelStore.finishImgUrl ?? undefined} />
            <InputButton value="nextLevelStage" autoFocus onClick={() => levelStore.nextLevelStage()} />
        </div>
    );
}));

export default LevelFinish;