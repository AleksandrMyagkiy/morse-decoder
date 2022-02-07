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
    let morseStr = '',
        morseRes ='';
    for (let i = 0; i < expr.length; i += 10){
        morseStr = expr.slice(i, i + 10);
        if (morseStr == "*".repeat(10)) {
            morseRes += ' ';
            continue;
        }
        let result = '',
            morseWord = '';
        for(let k = 0; k<morseStr.length; k += 2){
            morseWord = morseStr.slice(k, k + 2);
            if(morseWord == '10') {
                result += '.';
            }
            if(morseWord == "11") {
                result += '-';
            }
        }
        morseRes += MORSE_TABLE[result];
    }
    return morseRes;
}

module.exports = {
    decode
};