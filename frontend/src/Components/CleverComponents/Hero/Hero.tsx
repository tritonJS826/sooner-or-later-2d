
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from 'Store/CombineStores';
import styles from './Hero.module.scss';


const HeroView: React.FC = observer(() => {
  const { heroStore } = useStore();
  return (
      <div className={styles["hero"]} key={heroStore.id} 
      style={{
         right: `${heroStore.coords[0] * 100}%`,
         top: `${heroStore.coords[1] * 100 - 5}%`
         }}>
      </div>
  )
});

export default HeroView;