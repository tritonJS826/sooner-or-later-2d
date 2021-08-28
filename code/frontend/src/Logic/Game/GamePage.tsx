import { observer } from 'mobx-react';

interface GameProps {

}

const GamePage: React.FC<GameProps> = (props: GameProps) => {
  const test = 'test';

  return (
    <>
      ITs a game (
      {test}
      )
    </>
  );
};

export default observer(GamePage);
