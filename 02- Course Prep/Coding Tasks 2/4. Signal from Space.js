// Signal from Space
// One day a signal from space was registered. Scientists managed to record the signal as a sequence of N symbols. It turned out that due to a technical difficulty some symbols have been repeated. Help the scientists by writing a program which removes consecutive repetitions of symbols, decoding the message.

// Input
// Input data is read from the standard input

// On the only input line, a message is given
// Output
// Print to the standard output

// Print the decoded message
// Constraints
// The length of the message will be no more than 10000 symbols
// Message consists of digits and Latin letters (upper and lower case)

input = [
    'hoboobbo422222Aaao'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const result = gets().split('').reduce((acc, char) => {
    if (char !== acc[acc.length - 1]) {
        acc += char;
    }
    return acc;
}, '');

print(result);

// const string = gets();
// let newStr = string[0]; 

// for (let i = 1; i < string.length; i++) {
//     if (string[i] !== string[i - 1]) newStr += string[i];
// }
// print(newStr);

//---------------------------------------------------------

// const string = gets();

// function convertString(string) {
//     let i = 0;
//     let newStr = string[i]

//     for (let j = 1; j < string.length; j++) {
//         if (newStr[newStr.length - 1] !== string[j]) {
//             newStr += string[j]
//             i++;
//         }
//     }
//     return newStr;
// }

// print(convertString(string));

//---------------------------------------

// var str= gets();
// var result = str.replace(/(.)\1+/g, '$1');
// print(result);