
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import AnimatedSpan from '../../Components/BaseComponents/AnimatedSpan';
import styles from './About.module.scss';


const About: React.FC = observer(() => {
    return (
        <div className={styles["about"]}>
            <AnimatedSpan text="ABOUT US" className={styles["header"]}/>

            <AnimatedSpan text="Hi) this is one of the best studying games! I hope, that learning will be easier with it) " className={styles["text"]} />
            
            <Link to={routes.base}><AnimatedSpan text="<--back to menu..." className="link"/></Link>
        </div>
    );
});

export default About;