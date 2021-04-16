
import React from 'react';
import styles from'./InputText.module.scss';

interface IInputText extends React.HTMLAttributes<HTMLInputElement>{
    ref: any;
    value: any;
}

const InputText: React.FC<IInputText> = React.forwardRef((props: IInputText, ref: any) => {
  return (
    <input type="text" className={styles["input-text"]} {...props} ref={ref} />
)
});

export default InputText;