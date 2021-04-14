
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './LevelIntro.module.scss';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';

const HeroInfo: React.FC = (observer(() => {
    const {
        levelStore,
    } = useStore();

    return (
        <div className={styles["target-info"]}>
            {console.log(levelStore.levelStage)}
            <AnimatedSpan text={levelStore.startText} />
            <InputButton value="try this level" onClick={() => levelStore.nextLevelStage()} />
        </div>
    );
}));

export default HeroInfo;