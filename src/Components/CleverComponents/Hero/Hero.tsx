
import { observer } from 'mobx-react';
import React from 'react';
import hero from 'Store/Hero';
import styles from './Hero.module.scss';


const HeroView: React.FC = observer(() => {
  return (
      <div className={styles["hero"]} key={hero.id} 
      style={{
         left: `${hero.coords[0] * 100 - 5}%`,
         top: `${hero.coords[1] * 100 - 5}%`
         }}>
        {`I am ${ hero.name }`}
      </div>
  )
});

export default HeroView;