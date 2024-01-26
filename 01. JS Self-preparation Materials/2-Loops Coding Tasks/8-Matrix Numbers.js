// Write a program that reads from the console a positive integer number N and prints a matrix like in the examples below. Use two nested loops.

input = [
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let matrix = +gets();
let row = '';

// for (let i = 1; i <= matrix; i++) {
//     for (let y = 0; y < matrix; y++) {
//         row += (i + y) + ' ';
//     }
//     print(row);
//     row = ''
// }
let num = 1;
for (let i = 0; i < matrix; i++) {
    for (let y = 0; y < matrix; y++) {
        row += num + ' ';
        num++;
    }
    print(row);
    row = '';
}