// Write a program that finds the prime factors of a given non-prime number. List the factors in ascending order.

// 12 = 2 * 2 * 3
// 100 = 2 * 2 * 5 * 5
// Input
// On the first line you will receive one number - N
// Output
// Output each prime factor on a newline.

input = [
    '90'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();

for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        print(i);
        number /= i;
        i = 1;
    }
}

// var num = +gets();
//     var divisor = 2;
//     while (divisor <= num){
//         if(num % divisor === 0){
//             num =  num/divisor;
//             print(divisor)
//         }else{
//             divisor++;
//         }
//     }