import { cards } from './Cards.json';

class CardsService {
    getCards() {
        return cards;
    }

    getCardsById(cardsId: number[]) {
        // пересечение
        return cards.filter(x => cardsId.includes(Number(x.id)));
    }
}

const cardsService = new CardsService();

export default cardsService;