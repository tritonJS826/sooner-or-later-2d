import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import SimpleEnemy from '../../../Models/SimpleEnemy';
import styles from './SimpleEnemy.module.scss';
import InputButton from 'Components/BaseComponents/InputButton';
import { useStore } from 'Store/CombineStores';

interface ISimpleEnemy {
  enemy: SimpleEnemy;
}

const SimpleEnemyView = observer(React.forwardRef<HTMLInputElement, ISimpleEnemy>(({ enemy }, ref: any) => {
  const { heroesStore } = useStore();

  const yourHero = heroesStore.heroes[0];

  useEffect(() => {
    enemy.startDoSomething(yourHero);
  }, []);

  const onEnemy = () => {
    yourHero.setTarget(enemy.id);
    ref?.current.focus();
  };
  
  return (
    <>
      {enemy.health > 0 && (
        <div
          className={`${styles["simple-enemy"]} ${yourHero.targetId === enemy.id ? styles['enemy-captured'] : ''}`}
          style={{
            // 1 и 8 это поправочные коэффициенты, нужно будет потом правильно центрировать
            right: `${enemy.coords[0] * 100 - 1}%`,
            top: `${enemy.coords[1] * 100 - 8}%`,
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