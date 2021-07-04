import React from 'react';
import textAppearance from './textAppearance';

interface AnimatedSpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string | null;
}

const AnimatedSpan: React.FC<AnimatedSpanProps> = ({ text, ...props }) => (
  <span {...props}>
    {textAppearance(text ?? '')}
  </span>
);

export default AnimatedSpan;
