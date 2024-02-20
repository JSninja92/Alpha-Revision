// You need to provide conversion of the temperature given in Celsius to their Fahrenheit representation.

//     Explanation
// Hint
// Search how you could split the list of values and then you can iterate over them.
//     JavaScript
// forEach
// Java
// For - each loop
// C#
// For - each loop
// Input
// On the first line, you will receive a list of values separated by a single space.
//     Output
// On each line in the output print the converted temperature.Print a whole number rounded to the nearest integer(Math rules apply) and without digits after the decimal point.

input = [
    '0 15 30'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const degrees = gets().split(' ').map(Number);
const converted = degrees.map(num => print(num * (9 / 5) + 32))
