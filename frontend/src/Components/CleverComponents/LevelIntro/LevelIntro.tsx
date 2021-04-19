import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import styles from './LevelIntro.module.scss';
import InputButton from 'Components/BaseComponents/InputButton';
import Image from 'Components/BaseComponents/Image';
import Text from 'Components/BaseComponents/Text';

const HeroInfo: React.FC = (observer(() => {
    const {
        levelStore,
    } = useStore();

    return (
        <div className={styles["level-intro"]}>
            <Text text={String(levelStore.startText)} />
            <Image src={levelStore.startImgUrl ?? undefined} />
            <InputButton value="try this level" autoFocus onClick={() => levelStore.nextLevelStage()} />
        </div>
    );
}));

export default HeroInfo;