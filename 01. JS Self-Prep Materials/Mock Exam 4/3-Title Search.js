// Title Search
// You will receive a string title which contains only small latin letters [a-z]. After that you will have to read from the input N lines of text. For each of these lines, your task is to find out if there is such a sequence in the string you receive as input on the first line (title). The sequence may not be on consecutive indices. Each time you find a sequence of these characters you remove it from the initial string and print the modified string. If no such sequence is found you have to print No such title found! and not modify the string.

// Examples:
// telerik is found in telerikacademy and the remaining string is academy
// telerik is also found in tpeplpeprik and the remaining string is pppp
// Input
// Read from the standard input
// On the first line you receive a string containing small latin letters [a-z]
// On the next line you receive an integer N which represents the number of lines which you will have to read
// On each of the next N lines you receive a string
// Output
// Print on the standard output
// On every N line, print the result of the operation
// Examine the sample tests for explanation

input = [
    'peshoishere',
    '3',
    'eho',
    'piere',
    'telerik'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const word = gets().split('');
const times = +gets();
let isIncluded = true;

for (let i = 0; i < times; i++) {
    const curWord = gets().split('');
    for (let j = 0; j < curWord.length; j++) {
        const symbol = curWord[j];
        if (word.includes(symbol)) {
            const index = word.indexOf(symbol);
            word.splice(index, 1);
        } else {
            print(`No such title found!`);
            isIncluded = false;
            break;
        }
    }
    if (!isIncluded) {
        break;
    } else {
        print(word.join(""))
    }
}


