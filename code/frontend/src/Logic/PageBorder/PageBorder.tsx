import Image from 'Components/Image/Image';
import { PropsWithChildren } from 'react';
import BloodMoon7 from 'Resources/bloodBack7+.jpg';
import BloodMoon13 from 'Resources/bloodBack13+.jpg';
import BloodMoon14 from 'Resources/bloodBack14+.jpg';
import BloodMoon15 from 'Resources/bloodBack15+.jpg';
import styles from 'Logic/PageBorder/PageBorder.module.scss';
import globalStyles from 'index.module.scss';
import InputButton from 'Components/InputButton';

interface PageBorderProps {
    backButton?: {
      onClick: () => void;
      text: string
    }
}

const PageBorder: React.FC<PropsWithChildren<PageBorderProps>> = (props: PropsWithChildren<PageBorderProps>) => {
  const images = [
    // BloodMoon7,
    // BloodMoon13,
    // BloodMoon14,
    BloodMoon15,
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);

    return images[randomIndex];
  };

  return (
    <div className={styles.wrapper}>
      <header className={globalStyles['sol-header']}>
        {props.backButton && (
          <InputButton
            value={props.backButton?.text}
            onClick={props.backButton?.onClick}
            style={{ width: 200 }}
          />
        )}
      </header>
      <Image
        src={getRandomImage()}
        className={styles['appear-from-dark']}
      />
      {props.children}
    </div>
  );
};

export default PageBorder;
