// Biggest Prime Number
// Description
// Write a program that finds all prime numbers in the range [1 ... N]. Use the Sieve of Eratosthenes algorithm. The program should print the biggest prime number which is <= N.

// Input
// On the first line you will receive the number N
// Output
// Print the biggest prime number which is <= N

input = [
    '13'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = +gets();
let biggestPrime = 0;

for (let i = num; i >= 2; i--) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        biggestPrime = i;
        break;
    }
}
print(biggestPrime);
