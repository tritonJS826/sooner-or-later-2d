import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import SimpleEnemy from '../../../Models/SimpleEnemy';
import { Hero } from '../../../Store/Hero';
import styles from './SimpleEnemy.module.scss';

interface ISimpleEnemy {
  enemy: SimpleEnemy;
  hero: Hero;
}

const SimpleEnemyView: React.FC<ISimpleEnemy> = observer(({ enemy, hero }) => {

  useEffect(() => {
    enemy.startDoSomething(hero);
  }, []);

  return (
    <>
      {enemy.health > 0 && (
        <div className={`${styles["simple-enemy"]} ${hero.targetId === enemy.id ? styles['enemy-captured'] : ''}`}
          style={{
            left: `${enemy.coords[0] * 100 - 5}%`,
            top: `${enemy.coords[1] * 100 - 5}%`,
          }}>
          {`I am Enemy ${enemy.frontSide}`}
        </div>
      )}

      {enemy.health < 0 && (
        <div className="simple-enemy__dead">
          {`I am dead Enemy ${enemy.frontSide}`}
        </div>
      )}

    </>
  )
});

export default SimpleEnemyView;