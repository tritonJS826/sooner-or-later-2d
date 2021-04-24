
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from 'Store/CombineStores';
import { Hero } from 'Models/Hero';
import styles from './Hero.module.scss';


const HeroesView: React.FC = observer(() => {
  const { heroesStore } = useStore();

  const renderHero = (hero: Hero) => {
    return (<div className={styles["hero"]} key={hero.id}
      style={{
        right: `${hero.coords[0] * 100}%`,
        top: `${hero.coords[1] * 100 - 5}%`
      }}>
    </div>)
  };

  return (
    <div>
      {heroesStore.heroes.map(renderHero)}
    </div>
  )
});

export default HeroesView;