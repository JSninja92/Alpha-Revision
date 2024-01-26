// Write a program that read a digit [0-9] from the console, and depending on the input, shows the digit as a word (in English).

// Print "not a digit" in case of invalid input.
// Use a switch statement.
// Input
// The input consists of one line only, which contains the digit.
// Output
// Output a single line - should the input be a valid digits, print the english word for the digits. Otherwise, print "not a digit".
// Constraints
// The input will never be an empty line.
// Sample tests
// Input	Output
// -0.1	not a digit
// 1	one
// 9	nine
// -9	not a digit
// kek	not a digit


input = [
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const digit = +gets();

switch (digit) {
    case 1: print('one'); break;
    case 2: print('two'); break;
    case 3: print('three'); break;
    case 4: print('four'); break;
    case 5: print('five'); break;
    case 6: print('six'); break;
    case 7: print('seven'); break;
    case 8: print('eight'); break;
    case 9: print('nine'); break;
    case 0: print('zero'); break;
    default: print('not a digit');
}


