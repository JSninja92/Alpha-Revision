// The crooked digit of a given number N is calculated using the number's digits in a very weird and bendy algorithm. The algorithm takes the following steps:

// Sums the digits of the number N and stores the result back in N.
// If the obtained result is bigger than 9, step 1. is repeated, otherwise the algorithm finishes.
// The last obtained value of N is the result, calculated by the algorithm.

// Input
// The input data should be read from the console.
// The only line in the input contains a number N, which can be an integer or real number (decimal fraction), positive or negative.
// The input data will always be valid and in the format described. There is no need to check it explicitly.
// Output
// The output data should be printed on the console.

// You must print the calculated crooked digit of the number N on the first and only line of the output.

input = [
    '-7231'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets();

while (true) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let curNumber = +numbers[i];
        if (!isNaN(curNumber)) sum += curNumber;
    }
    numbers = String(sum);
    if (sum <= 9) break;
}
print(numbers);

