// Write a program that checks if a list is already sorted. For a list to be sorted, the next element must NOT be smaller than the previous one.

// Input
// On the first line - you will receive a number N.
// On the next N lines, you will receive a list of numbers, separated by a comma
// Output
// There are N lines of output
// for each list you receive, print 'true' if sorted or 'false' otherwise.

input = [
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const lists = +gets();

for (let i = 0; i < lists; i++) {
    const curList = gets().split(',').map(Number);
    let result = true;
    for (let j = 0; j < curList.length - 1; j++) {
        if (curList[j] > curList[j + 1]) {
            result = false;
            break;
        }
    }
    print(result);
}
