let pmTime = '12:01:00PM';
// Return '12:01:00'.
let amTime = '12:01:00AM';
// Return '00:01:00'.


// function timeConversion(s) {
//     // Write your code here
//     const amPm = s.slice(-2);

//     if (amPm === 'PM') return s.slice(0, -2);

//     let hours = +s.slice(0, 2);

//     if (hours >= 12) hours = '00';
//     return hours + s.slice(2, 8);
// }

// console.log(timeConversion(amTime));

// function timeConversion(s) {

//     const amPm = pmTime.slice(-2);
//     const time = pmTime.slice(0, -2);
//     const timeArr = time.split(':');
//     let hours = timeArr[0];

//     if (amPm === 'PM') return time;

//     if (hours)


// }

function timeConversion(s) {
    // Write your code here
    const amPm = s.slice(-2);
    let [hours, minutes, seconds] = s.slice(0, -2).split(':');

    if (amPm === 'PM' && +hours < 12) {
        hours = +hours + 12;
    } else if (amPm === 'AM' && hours === '12') {
        hours = '00';
    }

    const time = `${hours}:${minutes}:${seconds}`;
    return time;

}

console.log(timeConversion('12:05:45AM'))

// function timeConversion(s) {
//     const amPm = s.slice(-2);
//     const timeWithoutAmPm = s.slice(0, -2).split(':');
//     const [hours, minutes, seconds] = timeWithoutAmPm;

//     if (amPm === 'PM') {
//         if (hours !== '12') {
//             return `${parseInt(hours, 10) + 12}:${minutes}:${seconds}`;
//         }
//     } else if (hours === '12') {
//         return `00:${minutes}:${seconds}`;
//     }

//     return `${hours}:${minutes}:${seconds}`;
// }

// console.log(timeConversion('12:01:00AM'))