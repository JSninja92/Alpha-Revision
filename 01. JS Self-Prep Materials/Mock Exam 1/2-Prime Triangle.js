// Description
// We know that you love math, so we have prepared a very interesting task, that involves both geometry and prime numbers.

// By a given N number, from which you need to generate a sequence of 1 to N inclusive. For every prime number in that sequence, you need to print out all the other numbers before it (and the number itself), whether they are prime or not

// Note:
// For the purposes of this task (and against the laws of mathematics), the number 1 is considered as prime.

// Example
// Let's say N=10

// We have the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// The prime numbers are 1, 2, 3, 5, 7 - 5 prime numbers, so we print 5 rows
// Each row contains all the numbers for 1 to PRIME_NUMBER
// Result:

// 1

// 1 2

// 1 2 3

// 1 2 3 4 5

// 1 2 3 4 5 6 7

// Let's make things simpler:

// Print 0 if the numbers is not prime
// Print 1 if the number is prime
// Final result:

// 1

// 1 1

// 1 1 1

// 1 1 1 0 1

// 1 1 1 0 1 0 1

// Input
// Read from the standard input
// On the single line, find the number N
// The input data will always be valid and in the format described. There is no need to check it explicitly
// Output
// Print on the standard output
// The output should consist of several lines of digits each of which can be either 1 or 0
// Without any space between them

input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let result = '';

for (let i = 1; i <= N; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        result += 1;
        print(result);
    } else {
        result += 0;
    }
}
