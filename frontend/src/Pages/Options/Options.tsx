
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import AnimatedSpan from '../../Components/BaseComponents/AnimatedSpan';
import styles from './Options.module.scss';


const Options: React.FC = observer(() => {
    return (
        <div className={styles["help"]}>            

            <AnimatedSpan text="Options here" className={styles["text"]}/>
            
            <AnimatedSpan text="music" />

            <AnimatedSpan text="difficulty" />

            <Link to={routes.base}><AnimatedSpan text="<-- back to menu..." className={styles["link"]} /></Link>
        </div>
    );
});

export default Options;