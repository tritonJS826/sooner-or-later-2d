import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './LevelIntro.module.scss';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';
import Image from 'Components/BaseComponents/Image';

const HeroInfo: React.FC = (observer(() => {
    const {
        levelStore,
    } = useStore();

    return (
        <div className={styles["level-intro"]}>
            <AnimatedSpan text={levelStore.startText} />
            <Image src={levelStore.startImgUrl ?? undefined} />
            <InputButton value="try this level" autoFocus onClick={() => levelStore.nextLevelStage()} />
        </div>
    );
}));

export default HeroInfo;