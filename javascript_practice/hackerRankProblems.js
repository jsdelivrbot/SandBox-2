// const main = () => {
//   let arr = [1, 2, 3, 4, 5];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let min = (max = sum - arr[0]);
//   for (let i = 0; i < arr.length; i++) {
//     let tempSum = sum - arr[i];
//     max = tempSum > max ? tempSum : max;
//     min = tempSum < min ? tempSum : min;
//   }
//   console.log(min);
//   console.log(max);
// };
// main();

// const birthdayCakeCandles = (n, ar) => {
//   let max = ar[0];
//   let count = 0;
//   ar.forEach(el => {
//     max = el > max ? el : max;
//   });
//   ar.forEach(el => {
//     count = el === max ? count + 1 : count;
//   });
//   console.log(count);
// };
// let n = 5;
// let ar = [1, 2, 3, 4, 5, 5];
// birthdayCakeCandles(n, ar);

// const timeConversion = s => {
//   let answer = '';
//   if (s[8] === 'P') {
//     let hours = parseInt(s[0]) * 10 + parseInt(s[1]) + 12;
//     hours = hours === 24 ? "00" : hours.toString();
//     answer += hours;
//     answer += s.slice(2, -2);
//   } else {
//     answer += s.slice(0, -2);
//   }
//   return answer;
// };

// let s = '07:05:45PM';
// console.log(timeConversion(s));

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];
// let sums = [];
// for (let i = 1; i < arr[0].length - 1; i++) {
//   for (let j = 1; j < arr[0].length - 1; j++) {
//     sums.push(
//       arr[i][j] +
//         arr[i - 1][j - 1] +
//         arr[i - 1][j] +
//         arr[i - 1][j + 1] +
//         arr[i + 1][j - 1] +
//         arr[i + 1][j] +
//         arr[i + 1][j + 1]
//     );

//   }
// }
// let max = sums[0];
// sums.forEach(sum => {
//   max = sum > max ? sum : max;
// })
// console.log(max);

// const processData = input => {
//   let seqList = [];
//   for (var index = 0; index < array.length; index++) {
//     var element = array[index];

//   }
// }

function timeConversion(s) {
  let answer = '';
  let hours = parseInt(s[0]) * 10 + parseInt(s[1]);
  if (s[8] === 'P') {
    hours = hours === 24 ? '00' : hours.toString();
    answer += hours;
    answer += s.slice(2, -2);
  } else {
    hours = hours === 12 ? '00' : hours.toString();
    answer += hours;
    answer += s.slice(2, -2);
  }
  return answer;
}
console.log(timeConversion('05:05:45AM'));
console.log(timeConversion('12:05:39AM'));
