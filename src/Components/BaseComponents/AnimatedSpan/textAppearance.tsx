import React from 'react';
import generator from '../../../Service/IdGenerator';
import styles from './AnimatedSpan.module.scss';

const animatedClasses = ['anim0', 'anim1', 'anim2', 'anim3'];
const textAppearance = (text: string) => {
  const words = text.split(' ');
  const animatedWords = words.map((word) => {
    return word.split('').map((letter) => {
      const randomClassNumber = Math.round(Math.random() * (animatedClasses.length - 1));
      const appearanceAnimation = animatedClasses[randomClassNumber];
  
      return (
        <span key={generator.generateId()} className={styles[appearanceAnimation]}>
          {letter || '&nbsp;'}
        </span>
      );
    });
  });
  const noBreakWord = (children: JSX.Element[], key: number) => {
    return <span key={key} style={{whiteSpace: "nowrap"}}>{children}</span>
  };

  return animatedWords.flatMap((word, number) => [noBreakWord(word, number), ' ']);
};

export default textAppearance;
