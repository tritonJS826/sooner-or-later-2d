import { cards } from './Cards.json';

class CardsService {
    getCards() {
        return cards;
    }
}

const cardsService = new CardsService();

export default cardsService;