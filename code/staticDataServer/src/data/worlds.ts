import { englishCards } from "./English/cards"
import { englishLevels } from "./English/levels"
import { algebraCards } from "./Algebra/cards"
import { algebraLevels } from "./Algebra/levels"

export const worlds = [
    {
        "id": "1algebra",
        "name": "Algebra",
        "description": "This is description for Algebra world. This is description for Algebra world. This is description for Algebra world. This is description for Algebra world. This is description for Algebra world.",
        "cards": algebraCards,
        "levels": algebraLevels,
    },
    {
        "id": "2english",
        "name": "English",
        "description": "English world description. English world description. English world description. English world description. ",
        "cards": englishCards,
        "levels": englishLevels,
    }
]