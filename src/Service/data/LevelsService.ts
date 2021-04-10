import { levels } from './Levels.json';

class LevelsService {
  getLevels() {
    console.log(this);
    return levels;
  }
}

const levelsService = new LevelsService();

export default levelsService;
