// Greater Number
// You are given two arrays where the elements of the first one are subset of the elements of the second one. For each element in the first array, find the next greater element in the second array, starting at the position of the given element.

// Input
// Read from the standard input.
// On the first line will be the first array of numbers, separated by comma.
// On the second line will be the second array of numbers, separated by comma.
// Output
// Print the result on the standard output.
// The result should be the numbers, separated by comma.

input = [
    '4,1,2',
    '1,3,4,2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const arr1 = gets().split(',').map(Number);
// const arr2 = gets().split(',').map(Number);
// const result = [];

// for (let i = 0; i < arr1.length; i++) {
//     const curEl = arr1[i];
//     const index = arr2.indexOf(curEl);
//     const numsLeft = arr2.slice(index, arr2.length);

//     if (Math.max(...numsLeft) > curEl) {
//         for (let j = 1; j < numsLeft.length; j++) {
//             if (numsLeft[j] > curEl) {
//                 result.push(numsLeft[j]);
//                 break;
//             }
//         }
//     } else {
//         result.push(-1);
//     }
// }

// print(result);

let arr1 = gets().split(",").map(Number);
let arr2 = gets().split(",").map(Number);

for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);
    let curNum = arr1[i];
    for (let j = index; j < arr2.length; j++) {
        let nextNum = arr2[j + 1]
        if (nextNum > curNum) {
            arr1[i] = nextNum;
            break;
        }
        arr1[i] = -1;
    }
}
print(arr1);