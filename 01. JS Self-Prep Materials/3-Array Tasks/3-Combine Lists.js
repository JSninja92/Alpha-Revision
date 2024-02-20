input = [
    '2,3,1',
    '5,2,3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr1 = gets().split(',');
const arr2 = gets().split(',');
const joinedArr = [];

for (let i = 0; i < arr1.length; i++) {
joinedArr.push(arr1[i]);
joinedArr.push(arr2[i]);
}
print(joinedArr.map(Number));