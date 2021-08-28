import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ElementsMenu.module.scss';

interface ElementsMenuProps {
  text: string;
  to?: string;
  onClick?: () => any;
}

/**
 * Custom link in menu
 */
const ElementsMenu: React.FC<ElementsMenuProps> = (props: ElementsMenuProps) => (props.onClick
  ? (
    <a role="button" onClick={props.onClick} >
      <li className={styles.li}>
        <span className={styles.trim} />
        {props.text}
      </li>
    </a>
  )
  : (
    <Link to={props.to ?? '/'} style={{ display: 'block' }}>
      <span className={styles.li}>
        <span className={styles.trim} />
        {props.text}
      </span>
    </Link>
  ));

export default ElementsMenu;
