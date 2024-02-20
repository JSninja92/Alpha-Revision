// Dog Years
// Most people believe that 1 human year (HY) equals 7 dog years (DY), however, dogs reach adulthood in approximately 2 human years.

// So it's better to count the first two HY as 10 DY each and then count the remaining HY as 4 DY each.

// Write a program that correctly converts human years (HY) to dog years (DY). You may need some form of conditional logic.

input = [
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const dy = +gets();
let hy = 0;

if (dy <= 2) {
    hy = dy * 10;
} else {
    hy = (dy - 2) * 4 + 20;
}

print(hy);