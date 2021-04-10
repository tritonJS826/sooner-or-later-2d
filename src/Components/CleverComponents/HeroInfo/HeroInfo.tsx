
import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import './HeroInfo.css';
import { useStore } from '../../../Store/CombineStores';
import EventListener from '../../StupidComponents/EventListener/EventListener';


const HeroInfo: React.FC = (observer(() => {
    const {
        heroStore,
        enemiesStore,
    } = useStore();
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeAttackPhrase = (event: React.FormEvent<HTMLInputElement>) => {
        heroStore.setAttackPhrase(event.currentTarget.value);
    };

    const onKeyPress = (event: KeyboardEvent) => {
        inputRef.current?.focus();
        
        // hero shoot in enemy
        if (event.key === 'Enter') {
            heroStore.shoot(enemiesStore.getEnemyById(heroStore.targetId));
            heroStore.setAttackPhrase('');
        }

        //change hero's target
        if (event.ctrlKey) {
            const enemiesLength = enemiesStore.enemies.length;
            const enemyIndex = enemiesStore.getEnemyIndexById(heroStore.targetId);

            // if enemies exist
            if (enemiesLength !== 0) {

                // target === null, or enemy died
                if (heroStore.targetId === null || enemyIndex === null) {
                    heroStore.setTarget(enemiesStore.enemies[0].id);

                    // enemy index before last index in array
                } else if (typeof enemyIndex == 'number' && enemyIndex < enemiesLength - 1) {
                    heroStore.setTarget(enemiesStore.enemies[enemyIndex + 1].id);

                    // enemies index is last index in array
                } else {
                    heroStore.setTarget(enemiesStore.enemies[0].id);
                }

                // if all enemies died
            } else {
                heroStore.setTarget(null);
            }
        }
    };

    return (
        <div className="hero-info">
            <EventListener callback={onKeyPress}/>

            health = {heroStore.health}

            id = {heroStore.id}

            <input type="text"
                ref={inputRef}
                value={heroStore.attackPhrase}
                onChange={onChangeAttackPhrase}
            />

            target = {heroStore.targetId}
        </div>
    );
}));

export default HeroInfo;