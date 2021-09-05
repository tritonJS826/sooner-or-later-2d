import {englishCards} from './cards';

export const englishLevels = [
    {
        id: 'english1',
        title: 'First level',
        description: 'This is short description of the first level of English world. This is short description of the first level of English world. This is short description of the first level of English world. This is short description of the first level of English world.',
        waves: [{time: 5, cards: [englishCards[0], englishCards[1]]}],
    },
    {
        id: 'english2',
        title: 'Second level',
        description: 'This is not very long description of the second level of English world.',
        waves: [{time: 5, cards: [englishCards[0], englishCards[1]]}, {time: 10, cards: [englishCards[1], englishCards[2]]}],
    },
]