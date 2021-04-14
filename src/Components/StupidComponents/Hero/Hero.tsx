
import React from 'react';
import { observer } from 'mobx-react';
import { Hero } from '../../../Store/Hero';
import styles from './Hero.module.scss';

interface IHero {
  hero: Hero;
}

const HeroView: React.FC<IHero> = observer(({ hero }) => {
  return (
      <div className={styles["hero"]} key={hero.id} 
      style={{
         left: `${hero.coords[0] * 100 - 5}%`,
         top: `${hero.coords[1] * 100 - 5}%`
         }}>
        {`I am Hero ${ hero.name }`}
      </div>
  )
});

export default HeroView;