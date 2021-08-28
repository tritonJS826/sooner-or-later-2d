import React from 'react';
import idGenerator from 'Utils/IdGenerator';
import styles from './InputText.module.scss';

interface IInputText extends React.HTMLAttributes<HTMLInputElement> {
  ref?: any;
  value: any;
  label?: string;
}

const InputText: React.FC<IInputText> = React.forwardRef((props: IInputText, ref: any) => {
  const selectId = String(idGenerator());

  return (
    <div className={styles.input}>
      <label htmlFor={selectId}>{props.label}</label>
      <input id={selectId} type="text" className={styles['input-text']} {...props} ref={ref} />
    </div>
  );
});

export default InputText;
