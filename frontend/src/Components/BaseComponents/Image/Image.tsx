
import React from 'react';
import styles from'./Image.module.scss';

interface IImage extends React.ImgHTMLAttributes<HTMLImageElement>{
}

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = React.forwardRef((props: IImage, ref: any) => {
  return (
    <img ref={ref} src={props.src ?? undefined} className={styles["input-image"]} alt="wrong src!" {...props} />
)
});

export default Image;