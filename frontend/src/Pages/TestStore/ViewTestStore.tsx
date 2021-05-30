
import { routes } from 'App';
import AnimatedSpan from 'Components/BaseComponents/AnimatedSpan';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { testStore } from '../../Store/TestStore';
import styles from './ViewTestStore.module.scss';


const ViewTestStore: React.FC = () => {
    const [store, setStore] = useState(testStore.randomNumber)

    var requestId: number | undefined;


    function loop() {
        requestId = undefined;
        console.log(1);

        setStore(store)
        start();
    }

    function start() {
        if (!requestId) {
            requestId = window.requestAnimationFrame(loop);
        }
    }

    function stop() {
        if (requestId) {
            window.cancelAnimationFrame(requestId);
            requestId = undefined;
        }
    }


    return (
        <>

            <div className={styles["testStore"]}>
                <h1 id="store">{store}</h1>
            </div>

            <AnimatedSpan text="Начать отрисовку" onClick={() => start()} className={styles["link"]} />

            <Link to={routes.base}><AnimatedSpan text="<--back to menu..." onClick={() => stop()} className={styles["link"]} /></Link>
        </>
    );
};

export default ViewTestStore;