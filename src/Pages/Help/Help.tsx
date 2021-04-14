
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import AnimatedSpan from '../../Components/BaseComponents/AnimatedSpan';
import styles from './Help.module.scss';


const Help: React.FC = observer(() => {
    return (
        <div className="help">            

            <AnimatedSpan text="Hi) this is one of the best learning games! I hope, that learning \
            will be easier with it) Rules and shortcuts on this page..." className={styles["text"]}/>
            
            <Link to={routes.base}><AnimatedSpan text="<-- back to menu..." className={styles["link"]} /></Link>
        </div>
    );
});

export default Help;