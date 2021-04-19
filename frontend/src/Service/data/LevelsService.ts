import { levels } from './Levels.json';

class LevelsService {
  getLevels() {
    return levels;
  }
}

const levelsService = new LevelsService();

export default levelsService;
