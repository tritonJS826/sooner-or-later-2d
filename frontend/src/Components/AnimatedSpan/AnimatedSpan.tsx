import React from 'react';
import textAppearance from './textAppearance';

interface IAnimatedSpan extends React.HTMLAttributes<HTMLSpanElement>{
  text: string | null;
}

const AnimatedSpan: React.FC<IAnimatedSpan> = ({ text, ...props }) => (
  <span {...props}>
    {textAppearance(text ?? '')}
  </span>
);

export default AnimatedSpan;
