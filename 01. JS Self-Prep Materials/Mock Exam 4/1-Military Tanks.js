// Military Tanks
// Military scientists are training battle tanks using artificial intelligence. The first lesson is to teach them to move across the (x,y) - plane. They give them a sequence of moves and observe whether the tanks get to the correct (x, y) position on the field. This sequence is represented by string, and the character at position i represents the tank’s i-th move.

// There are several commands – R – moves right, L – moves left, U – moves up and D – moves down.

// To help the scientists, you have to write a program that collects the learning results of the tanks.

// Imgur

// Input
// Read from the standard input:

// There is one line of input, a string that contains tank's sequence of moves, represented by capital letters - R, L, D, U, no intervals:
// RLDULLR
// Output
// Print to the standard output:

// One line of output - tank's coordinates -> (-1, 0)
// Please note there is a space between the comma and the second coordinate.

input = [
    'LLRD',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const movements = gets();

let du = 0;
let lr = 0;

for (let i = 0; i < movements.length; i++) {
    const direction = movements[i];
    if (direction === 'L') lr--;
    if (direction === 'R') lr++;
    if (direction === 'U') du++;
    if (direction === 'D') du--;
}

print(`(${lr}, ${du})`);