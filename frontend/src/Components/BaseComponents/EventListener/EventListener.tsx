import React, { useEffect } from 'react';

interface IEventListenerProps {
    callback: (e: KeyboardEvent) => void;
}

const EventListener: React.FC<IEventListenerProps> = ({ children, callback }) => {

    useEffect(() => {
        document.body.addEventListener('keydown', callback );

        return () => {
            document.body.removeEventListener('keydown',  callback );
        };
    });

    return (
        <>
        { children }
        </>
    )
};

export default EventListener