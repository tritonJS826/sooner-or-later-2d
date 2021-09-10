import Image from 'Components/Image/Image';
import { PropsWithChildren, useEffect, useState } from 'react';
import BloodMoon from 'Resources/bloodBack.jpg';
import BloodMoon0 from 'Resources/bloodBack0.jpg';
import BloodMoon1 from 'Resources/bloodBack1+.jpg';
import BloodMoon2 from 'Resources/bloodBack2+.jpg';
import BloodMoon3 from 'Resources/bloodBack3+.jpg';
// import BloodMoon4 from 'Resources/bloodBack4.jpg';
import BloodMoon5 from 'Resources/bloodBack5+.jpg';
import BloodMoon6 from 'Resources/bloodBack6+.jpg';
import BloodMoon7 from 'Resources/bloodBack7+.jpg';
import BloodMoon8 from 'Resources/bloodBack8+.jpg';
import BloodMoon9 from 'Resources/bloodBack9+.jpg';
import BloodMoon10 from 'Resources/bloodBack10+.jpg';
import BloodMoon11 from 'Resources/bloodBack11+.jpg';
import BloodMoon12 from 'Resources/bloodBack12+.jpg';
import BloodMoon13 from 'Resources/bloodBack13+.jpg';
import BloodMoon14 from 'Resources/bloodBack14+.jpg';
import BloodMoon15 from 'Resources/bloodBack15+.jpg';
import Logo from 'Resources/logo.png';
import Logo2 from 'Resources/logo2.png';
import styles from 'Logic/PageBorder/PageBorder.module.scss';
import globalStyles from 'index.module.scss';
import InputButton from 'Components/InputButton';

interface PageBorderProps {
    backButton?: {
      onClick: () => void;
      text: string
    }
}

const images = [
  // BloodMoon,
  // BloodMoon0,
  // BloodMoon1,
  // BloodMoon2,
  // BloodMoon3,
  // BloodMoon12,
  // BloodMoon5,
  // BloodMoon6,
  // BloodMoon7,
  // BloodMoon8,
  // BloodMoon9,
  // BloodMoon10,
  // BloodMoon11,
  // BloodMoon13,
  // BloodMoon14,
  // BloodMoon15,
  // Logo,
  Logo2,
];

const stylesList = [
  { right: 0 },
  { left: 0 },
  {
    left: 'calc(-50vw + 50%)',
    right: 'calc(-50vw + 50%)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
];

const PageBorder: React.FC<PropsWithChildren<PageBorderProps>> = (props: PropsWithChildren<PageBorderProps>) => {
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const getImageRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * stylesList.length);
    return stylesList[randomIndex];
  };

  const [imageStyle, setImageStyle] = useState(getImageRandomStyle());
  const [image, setImage] = useState(getRandomImage());
  useEffect(() => {
    setImage(getRandomImage());
    setImageStyle(getImageRandomStyle());
  }, []);

  return (
    <>
      <Image
        src={image}
        className={styles['appear-from-dark']}
        style={imageStyle}
      />
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
        {props.children}
      </div>
    </>
  );
};

export default PageBorder;
