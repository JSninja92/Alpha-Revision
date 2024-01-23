// You need to calculate the average of a collection of values. Every value will be valid number. The average must be printed with two digits after the decimal point.

input = [
    '4',
    '1',
    '1',
    '1',
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const times = +gets();
let sum = 0;

for (let i = 0; i < times; i++) {
    sum += +gets();
}

print((sum / times).toFixed(2));