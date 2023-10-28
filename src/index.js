const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseWords = expr.split('**********'); // Разделяем слова
    const decodedMessage = morseWords.map(word => {
        const morseChars = word.match(/.{1,10}/g); // Разбиваем слово на символы
        const decodedWord = morseChars.map(char => {
            const morseChar = char.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            return MORSE_TABLE[morseChar];
        });
        return decodedWord.join('');
    });
    return decodedMessage.join(' ');
}

module.exports = {
    decode
}