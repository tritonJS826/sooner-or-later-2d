
import React from 'react';
import { observer } from 'mobx-react';
import './About.css';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import AnimatedSpan from '../../Components/BaseComponents/AnimatedSpan';


const About: React.FC = observer(() => {
    return (
        <div className="about">
            <AnimatedSpan text="ABOUT US" className="header"/>

            <AnimatedSpan text="Hi) this is one of the best studying games! I hope, that learning will be easier with it) " className="text"/>
            
            <Link to={routes.base}><AnimatedSpan text="<--back to menu..." className="link"/></Link>
        </div>
    );
});

export default About;