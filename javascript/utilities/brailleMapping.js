const ENG_TO_BRAILLE_DICTIONARY = {
    "a": "O.....", 
    "b": "O.O...", 
    "c": "OO....", 
    "d": "OO.O..", 
    "e": "O..O..",
    "f": "OOO...", 
    "g": "OOOO..", 
    "h": "O.OO..", 
    "i": ".OO...", 
    "j": ".OOO..",
    "k": "O...O.", 
    "l": "O.O.O.", 
    "m": "OO..O.", 
    "n": "OO.OO.", 
    "o": "O..OO.",
    "p": "OOO.O.", 
    "q": "OOOOO.", 
    "r": "O.OOO.", 
    "s": ".OO.O.", 
    "t": ".OOOO.",
    "u": "O...OO", 
    "v": "O.O.OO", 
    "w": ".OOO.O", 
    "x": "OO..OO", 
    "y": "OO.OOO",
    "z": "O..OOO",
    "1": "O.....", 
    "2": "O.O...", 
    "3": "OO....",
    "4": "OO.O..", 
    "5": "O..O..",
    "6": "OOO...", 
    "7": "OOOO..", 
    "8": "O.OO..", 
    "9": ".OO...", 
    "0": ".OOO..",
    " ": "......",
    "capital": ".....O", 
    "decimal": ".O...O",
    "number": ".O.OOO"
}

const BRAILLE_TO_ENGLISH_DICTIONARY = Object.entries(ENG_TO_BRAILLE_DICTIONARY).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

module.exports = {
    ENG_TO_BRAILLE_DICTIONARY,
    BRAILLE_TO_ENGLISH_DICTIONARY
}