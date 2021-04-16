import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import SimpleEnemy from '../../../Models/SimpleEnemy';
import { Hero } from '../../../Store/Hero';
import styles from './SimpleEnemy.module.scss';
import InputButton from 'Components/BaseComponents/InputButton';

interface ISimpleEnemy {
  enemy: SimpleEnemy;
  hero: Hero;
}

const SimpleEnemyView = observer(React.forwardRef<HTMLInputElement, any>(({ enemy, hero }, ref: any) => {

  useEffect(() => {
    enemy.startDoSomething(hero);
  }, []);

  const onEnemy = () => {
    hero.setTarget(enemy.id);
    ref?.current.focus();
  };
  
  return (
    <>
      {enemy.health > 0 && (
        <div
          className={`${styles["simple-enemy"]} ${hero.targetId === enemy.id ? styles['enemy-captured'] : ''}`}
          style={{
            left: `${enemy.coords[0] * 100 - 5}%`,
            top: `${enemy.coords[1] * 100 - 5}%`,
          }}>
            <InputButton className={styles["enemy-button"]} onClick={onEnemy}/>
        </div>
      )}

      {enemy.health < 0 && (
        <div className="simple-enemy__dead">
          {`I am dead Enemy ${enemy.frontSide}`}
        </div>
      )}

    </>
  )
}));

export default SimpleEnemyView;