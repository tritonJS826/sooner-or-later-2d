import Image from 'Components/Image/Image';
import { PropsWithChildren } from 'react';
import BloodMoon from 'Resources/bloodMoon.jpg';
import styles from 'Logic/PageBorder/PageBorder.module.scss';

interface PageBorderProps {
    // auth?: boolean
}

const PageBorder: React.FC<PropsWithChildren<PageBorderProps>> = (props: PropsWithChildren<PageBorderProps>) => {
  const t = 'test';
  return (
    <div className={styles.wrapper}>
      <Image
        src={BloodMoon}
        style={{
          zIndex: -50,
          position: 'fixed',
          height: '100%',
        }}
      />
      {props.children}
    </div>
  );
};

export default PageBorder;
