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
    // write your solution here
	 let strLen = expr.length/10;
     let prevArr = [];
     for (i = 1; i <= strLen; i++){
         prevArr.push('')
     }
     let arrSybols = expr.split('').reduce((prev,item,index) => {
         prev[Math.floor(index/10)] += item;
         return prevArr
     },prevArr).map(item => item.split('')).reduce((prev,item,index) => {
         let i = 0;
         while(item[i] === '0'){
             item[i] = '';
             i++
         }
         prev.push(item)
         return prev
     },[]).map(item => item.join('')).map(item =>{
         let newItem = item.replace(/11/g,'-').replace(/10/g,'.')
         return item = newItem
     })
     let codeArr = Object.entries(MORSE_TABLE);
     for (i = 0; i <= arrSybols.length - 1; i++){
         for (j = 0; j <= codeArr.length - 1; j++){
             if (arrSybols[i] === codeArr[j][0]){
                 arrSybols[i] = codeArr[j][1]
             }
         }
         if(arrSybols[i] === '**********'){
             arrSybols[i] = ' '
         }
     }
     return arrSybols.join('')
}

module.exports = {
    decode
}