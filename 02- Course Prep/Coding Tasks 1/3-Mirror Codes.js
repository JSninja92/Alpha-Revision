// Mirror Codes
// Description
// Loni the elephant once again forgot his smartphone's PIN code. Since it's not the first time happening, he wrote down some guiding notes. There are two three-digit numbers. The mirror number of one of the numbers is the PIN code. The elephant remembers that this is the larger of the two mirror numbers.

// Write a program pincode, which determines the PIN code, given the two numbers from Loni's notes.

// Input
// Read from the standard input

// On the first line you will receive two three-digit integer numbers a and b - the numbers which Loni wrote down in his notes.
// Output
// Print to the standard output

// Print the found PIN code - the larger of the mirrors of the two numbers.

input = [
    '234 145'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let [a, b] = gets().split(' ');

a = a.split('').reverse().join('');
b = b.split('').reverse().join('');

print(Math.max(+a, +b));