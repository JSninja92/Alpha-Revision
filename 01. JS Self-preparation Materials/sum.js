// Write a program that reads two numbers from the standard input and prints their sum.

input = [
    'a',
    '1'
   
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const label = gets().toUpperCase();
const rank = +gets();

if (rank % 2 !== 0 && (label === "A" || label === "C" || label === "E" || label === "G")) {
    print('dark');
}
else {
    print('light')
}