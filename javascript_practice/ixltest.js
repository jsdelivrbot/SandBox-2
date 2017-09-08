// const holes = num => {
//   let digits = num.toString().split('');
//     let holes = 0;
//     digits.forEach(digit => {
//         if (digit === "0" || digit === "4" || digit === "6" || digit === "9") {
//           holes += 1;
//         } else if (digit === "8") {
//           holes += 2;
//         }
//     })
//     return holes;
// }

// console.log(holes(1288));
// const reduce = (numerator, denominator) => {
//   let gcd = function gcd(a, b) {
//     return b ? gcd(b, a % b) : a;
//   };
//   gcd = gcd(numerator, denominator);
//   let reducedNum = (numerator / gcd).toString();
//   let reducedDen = (denominator / gcd).toString();
//   return reducedNum + '/' + reducedDen;
// };

// const reducedFractionSums = expressions => {
//   let strings = [];
//   expressions.forEach(exp => {
//     exp += '/';
//     let nums = [];
//     let temp = '';
//     exp.split('').forEach(char => {
//       if (char === '/' || char === '+') {
//         nums.push(parseInt(temp));
//         temp = '';
//       } else {
//         temp += char;
//       }
//     });
//     let numerator = nums[0] * nums[3] + nums[1] * nums[2];
//     let denominator = nums[1] * nums[3];
//     // console.log('numerator: ', numerator);
//     // console.log('denominator: ', denominator);
//     // console.log(reduce(numerator, denominator));
//     strings.push(reduce(numerator, denominator));
//   });
//   return strings;
// };

const compare = (a, b) => {
  let result = a.length;
  let aLetters = a.split('').sort();
  let bLetters = b.split('').sort();
  for (let i = 0; i < aLetters.length; i++) {
    if (bLetters.includes(aLetters[i])) {
      result -= 1
    }
  }
  return result
}

const getMinimumDifference = (a, b) => {
  let aSorted = [];
  let bSorted = [];
  let result = [];
  a.forEach(str => {
    aSorted.push(str.split('').sort().join(''))
  })
  b.forEach(str => {
    bSorted.push(str.split('').sort().join(''))
  })
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      result.push(-1);
    } else if (a[i] === b[i]) {
      result.push(0)
    } else {
      result.push(compare(a[i], b[i]));
    }
  }
  return result;
}

let a = ['a', 'jk', 'abb'];
let b = ['bb', 'jk', 'bbc'];

console.log(getMinimumDifference(a,b));
