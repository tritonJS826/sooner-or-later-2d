
import React from 'react';
import styles from'./Text.module.scss';

interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string
}

const Text = (props: IText) => {
    const text = () => props.text.split('\n').map((p, key) => <span key={key}>&nbsp;&nbsp;&nbsp;{p}<br/></span> );
  return (
    <p className={styles["text"]} {...props} >
        {text()}
    </p>
)
};

export default Text;