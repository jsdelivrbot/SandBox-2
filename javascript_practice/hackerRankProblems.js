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

const timeConversion = s => {
  if (s === '12:00:00PM') {
    return '00:00:00';
  }
  let answer = '';
  if (s[8] === 'P') {
    let hours = parseInt(s[0]) * 10 + parseInt(s[1]) + 12;
    hours = hours === 24 ? "00" : hours.toString();
    answer += hours;
    answer += s.slice(2, -2);
  } else {
    answer += s.slice(0, -2);
  }
  return answer;
  
};

let s = '07:05:45PM';
console.log(timeConversion(s));
