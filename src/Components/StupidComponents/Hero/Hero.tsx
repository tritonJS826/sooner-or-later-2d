
import React from 'react';
import { observer } from 'mobx-react';
import './Hero.css';
import { Hero } from '../../../Store/Hero';

interface IHero {
  hero: Hero;
}

const HeroView: React.FC<IHero> = observer(({ hero }) => {
  return (
      <div className="hero" key={hero.id} 
      style={{
         left: `${hero.coords[0] * 100 - 5}%`,
         top: `${hero.coords[1] * 100 - 5}%`
         }}>
        {`I am Hero ${ hero.name }`}
      </div>
  )
});

export default HeroView;