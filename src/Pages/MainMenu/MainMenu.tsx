
import React from 'react';
import { observer } from 'mobx-react';
import styles from './MainMenu.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import AnimatedSpan from '../../Components/BaseComponents/AnimatedSpan'


const MainMenu: React.FC = observer(() => {
    return (
        <div className={styles["main-menu"]}>
            <AnimatedSpan text="{ MENU }" className={styles["header"]} />
            <Link to={routes.battleField}><AnimatedSpan text="GAME" className={styles["link"]}/></Link>
            <Link to={routes.help}><AnimatedSpan text="HELP" className={styles["link"]}/></Link>
            <Link to={routes.options}><AnimatedSpan text="OPTIONS" className={styles["link"]}/></Link>
            <Link to={routes.about}><AnimatedSpan text="ABOUT" className={styles["link"]}/></Link>
        </div>
    );
});

export default MainMenu;