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

const imageStyles = {
  right: {
    right: '0',
  },
  left: {
    left: '0',
  },
  center: {
    left: 'calc(-50vw + 50%)',
    right: 'calc(-50vw + 50%)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const images = {
  1: {
    image: BloodMoon,
    styles: [imageStyles.left, imageStyles.right],
  },
  2: {
    image: BloodMoon0,
    styles: [imageStyles.left, imageStyles.right],
  },
  3: {
    image: BloodMoon1,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  4: {
    image: BloodMoon2,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  5: {
    image: BloodMoon3,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  6: {
    image: BloodMoon5,
    styles: [imageStyles.center],
  },
  7: {
    image: BloodMoon6,
    styles: [imageStyles.left, imageStyles.right],
  },
  8: {
    image: BloodMoon7,
    styles: [imageStyles.center],
  },
  9: {
    image: BloodMoon8,
    styles: [imageStyles.center],
  },
  10: {
    image: BloodMoon9,
    styles: [imageStyles.center],
  },
  11: {
    image: BloodMoon10,
    styles: [imageStyles.center],
  },
  12: {
    image: BloodMoon11,
    styles: [imageStyles.center],
  },
  13: {
    image: BloodMoon12,
    styles: [imageStyles.center],
  },
  14: {
    image: BloodMoon13,
    styles: [imageStyles.right],
  },
  15: {
    image: BloodMoon14,
    styles: [imageStyles.center],
  },
  16: {
    image: BloodMoon15,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  17: {
    image: Logo,
    styles: [imageStyles.center],
  },
  18: {
    image: Logo2,
    styles: [imageStyles.center],
  },
};

const getRandomImage = () => {
  const imagesList = Object.values(images);
  const randomIndex = Math.floor(Math.random() * imagesList.length);
  const randomImage = imagesList[randomIndex].image;
  const randomStyleIndex = Math.floor(Math.random() * imagesList[randomIndex].styles.length);
  const randomStyle = imagesList[randomIndex].styles[randomStyleIndex];
  return {
    image: randomImage,
    style: randomStyle,
  };
};

const PageBorder: React.FC<PropsWithChildren<PageBorderProps>> = (props: PropsWithChildren<PageBorderProps>) => {
  const [currentImageStyle, setCurrentImageStyle] = useState<any>(imageStyles.center);
  const [currentImage, setCurrentImage] = useState(Logo);
  useEffect(() => {
    const { image, style } = getRandomImage();
    setCurrentImage(image);
    setCurrentImageStyle(style);
  }, []);

  return (
    <>
      <Image
        src={currentImage}
        className={styles['appear-from-dark']}
        style={currentImageStyle}
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
