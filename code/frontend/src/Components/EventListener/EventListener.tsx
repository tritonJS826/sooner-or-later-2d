import React, { useEffect } from 'react';

interface IEventListenerProps {
    callback: () => void;
    children: any;
}

const EventListener: React.FC<IEventListenerProps> = (
  { children, callback }: IEventListenerProps,
) => {
  useEffect(() => {
    document.body.addEventListener('keydown', callback);

    return () => {
      document.body.removeEventListener('keydown', callback);
    };
  });

  return (
    <>
      { children }
    </>
  );
};

export default EventListener;
