
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import InputButton from 'Components/BaseComponents/InputButton';
import Image from 'Components/BaseComponents/Image';
import cardsService from 'Service/data/CardsService';
import styles from './LevelFail.module.scss';
import Text from 'Components/BaseComponents/Text';

const LevelFail: React.FC = observer(() => {
    const {
        levelStore,
        gameStore,
    } = useStore();

    const allCardsId = (): number[] => levelStore.enemiesData?.flatMap(wave => wave.cardsId) ?? [];

    const uniqCardsId = () => new Set(allCardsId());

    const uniqCards = () => cardsService.getCardsById(Array.from(uniqCardsId()));

    return (
        <div className={styles["level-fail"]}>
            <AnimatedSpan text={levelStore.failText} />
            <Image src={levelStore.failImg ?? undefined} />

            
            <Text text="answer | question"/><br/>
            {uniqCards().map((card, key) => <><Text key={key} text={`${card.frontSide} | ${card.backSide}`}/></>)}
            <InputButton value="RESTART" autoFocus onClick={() => gameStore.levelStore.nextLevelStage()} />
        </div>
    );
});

export default LevelFail;