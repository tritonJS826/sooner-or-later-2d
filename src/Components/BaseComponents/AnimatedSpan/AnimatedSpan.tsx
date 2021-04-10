
import React from 'react';
// import './AnimatedSpan.module.scss';
import textAppearance from './textAppearance';

interface IAnimatedSpan extends React.HTMLAttributes<HTMLSpanElement>{
  text: string;
}

const AnimatedSpan: React.FC<IAnimatedSpan> = ({ text, ...props }) => {
  return (
    <span {...props}>
      {textAppearance(text)}
    </span>
)
};

export default AnimatedSpan;