"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worlds = void 0;
const cards_1 = require("./English/cards");
const levels_1 = require("./English/levels");
const cards_2 = require("./Algebra/cards");
const levels_2 = require("./Algebra/levels");
exports.worlds = [
    {
        "id": "1",
        "name": "Algebra",
        "description": "This is description for Algebra world. This is description for Algebra world. This is description for Algebra world. This is description for Algebra world. This is description for Algebra world.",
        "cards": cards_2.algebraCards,
        "levels": levels_2.algebraLevels,
    },
    {
        "id": "2",
        "name": "English",
        "description": "English world description. English world description. English world description. English world description. ",
        "cards": cards_1.englishCards,
        "levels": levels_1.englishLevels,
    }
];
//# sourceMappingURL=worlds.js.map