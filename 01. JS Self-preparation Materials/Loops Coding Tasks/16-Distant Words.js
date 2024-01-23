// Angel and Bibkata have very weird taste - their last idea of fun is calculating the "distance" that a word is from a given number. The distance is calculated by summing the position in the alphabet of each letter in the word and than finding the absolute difference between that word and another predefined number. You are a programmer so you must ruin their fun by automating the process.

// Examples:

// word 'bob', number = 22, distance = 3 ('b' + 'o' + 'b' = 2 + 15 + 2 = 19)
// word 'bob', number = 10, distance = 9
// Write a program that calculates the distance for each string and also outputs the average distance.

// Input
// The input consists of several lines.
// T - the target number
// N - the number of words to follow
// on the next N lines - each word on a new line
// Output
// Output consists of N + 1 lines
// First N lines - word + its distance in format word distance
// Last line - the average distance, rounded to two digits after the decimal point

input = [
    '10',
    '4',
    'flower',
    'window',
    'curtain',
    'book'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const number = +gets();
const words = +gets();
let total = 0;

for (let i = 0; i < words; i++) {
    const curWord = gets();
    let difference = 0;
    for (let j = 0; j < curWord.length; j++) {
        difference += curWord.charCodeAt(j) - 96
    }
    total += Math.abs(number - difference)
    print(`${curWord} ${Math.abs(number - difference)}`);
}
print((total / words).toFixed(2));