"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.englishLevels = void 0;
const cards_1 = require("./cards");
exports.englishLevels = [
    {
        id: 1,
        title: 'First level',
        description: 'This is short description of the first level of English world. This is short description of the first level of English world. This is short description of the first level of English world. This is short description of the first level of English world.',
        waves: [{ time: 5, cards: [cards_1.englishCards[0], cards_1.englishCards[1]] }],
    },
    {
        id: 2,
        title: 'Second level',
        description: 'This is not very long description of the second level of English world.',
        waves: [{ time: 5, cards: [cards_1.englishCards[0], cards_1.englishCards[1]] }, { time: 10, cards: [cards_1.englishCards[1], cards_1.englishCards[2]] }],
    },
];
//# sourceMappingURL=levels.js.map