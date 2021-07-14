import React from 'react';
import styles from './InputButton.module.scss';

interface IInputButton extends React.HTMLAttributes<HTMLInputElement>{
}

const InputText: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = React
  .forwardRef((props: IInputButton, ref?: any) => (
    <input type="button" ref={ref} className={styles['input-text']} {...props} />
  ));

export default InputText;
