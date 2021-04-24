
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../Store/CombineStores';
import EventListener from '../../BaseComponents/EventListener/EventListener';
import InputText from 'Components/BaseComponents/InputText';
import styles from './HeroInfo.module.scss';

const HeroInfo = observer(React.forwardRef<HTMLInputElement>((props, ref: any) => {
    const {
        heroesStore,
        enemiesStore,
    } = useStore();

    // тут конечно нужно исправить, чтоб у каждого свой герой был
    const yourHero = heroesStore.heroes[0]

    const onChangeAttackPhrase = (event: React.FormEvent<HTMLInputElement>) => {
        yourHero.setAttackPhrase(event.currentTarget.value);
    };

    const onKeyPress = (event: KeyboardEvent) => {
        ref?.current.focus();

        // hero shoot in enemy
        if (event.key === 'Enter') {
            yourHero.shoot(enemiesStore.getEnemyById(yourHero.targetId));
            yourHero.setAttackPhrase('');
        }

        //change hero's target
        if (event.ctrlKey) {
            const enemiesLength = enemiesStore.enemies.length;
            const enemyIndex = enemiesStore.getEnemyIndexById(yourHero.targetId);

            // if enemies exist
            if (enemiesLength !== 0) {

                // target === null, or enemy died
                if (yourHero.targetId === null || enemyIndex === null) {
                    yourHero.setTarget(enemiesStore.enemies[0].id);

                    // enemy index before last index in array
                } else if (typeof enemyIndex == 'number' && enemyIndex < enemiesLength - 1) {
                    yourHero.setTarget(enemiesStore.enemies[enemyIndex + 1].id);

                    // enemies index is last index in array
                } else {
                    yourHero.setTarget(enemiesStore.enemies[0].id);
                }

                // if all enemies died
            } else {
                yourHero.setTarget(null);
            }
        }
    };

    return (
        <div className={styles["hero-info"]}>
            <EventListener callback={onKeyPress} />

            health = {yourHero.health}

            <InputText
                ref={ref}
                value={yourHero.attackPhrase}
                onChange={onChangeAttackPhrase}
                className={styles["attack-phrase"]}
            />
        </div>
    );
}));

export default HeroInfo;