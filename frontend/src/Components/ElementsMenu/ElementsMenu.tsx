/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ElementsMenu.module.scss';

interface ElementsMenuProps {
  text: string;
  to: string;
  onClick?: () => any;
}

/**
 * Custom link in menu
 */
const ElementsMenu: React.FC<ElementsMenuProps> = (props: ElementsMenuProps) => (
  <Link to={props.to} style={{ display: 'block' }} onClick={props.onClick}>
    <li className={styles.li}>
      <div className={styles.svgWrap}>
      <span className={styles.trim} />
      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        width="21"
        height="36"
        viewBox="0 0 21 36"
        className={styles.svg}
      >
        <path
          d="M0.004,25.709 C0.004,25.709 0.004,35.987 0.004,35.987 C0.004,
            35.987 20.986,18.000 20.986,18.000 C20.986,18.000 0.004,0.013 0.004,0.013 C0.004,0.013 0.004,
            10.291 0.004,10.291 C0.004,10.291 8.873,18.000 8.873,18.000 C8.873,18.000 0.004,25.709 0.004,25.709 Z"
          id="path-1"
          className={styles.arrow}
          fillRule="evenodd"
        />
      </svg>
      </div>
    </li>
  </Link>
);

export default ElementsMenu;
