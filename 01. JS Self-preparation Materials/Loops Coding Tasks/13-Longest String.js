// You are very hungry, but there is a problem - there is just too much options and you can only eat one thing. Being a clever programmer, you decide to form objective critera and eat the food with the longest name. Also, why count manually in 30 seconds, when you can spend 15 minutes writing a script to do the counting?

// Input
// The input consists of at least 2 lines
// The last line is always END
// Each different food is on a new line
// Output
// Print the food with the longest name. If two or more foods have equal length, print the last one.

input = [
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
    'END'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let word = gets();
let longest = '';

while (word !== 'END') {
    if (word.length >= longest.length) longest = word;
    word = gets();
}
print(longest);