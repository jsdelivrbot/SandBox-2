// const readTextFile = file => {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open('GET', file, false);
//   rawFile.onreadystatechange = function() {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         var allText = rawFile.responseText;
//         alert(allText);
//       }
//     }
//   };
//   rawFile.send(null);
// };

let N = 5;
let K = 3;
let arr = [188930, 194123, 201345, 154243, 154243];

// console.log('N: ', N);
// console.log('K: ', K);
// console.log('arr: ', arr);

let subArrs = [];
let counter = 0;

for (let i = 0; i < N; i++) {
  let tempArr = arr.slice(i, i + K);
  if (tempArr.length === K) {
    subArrs.push(tempArr);
  }
}

for (let i = 0; i < subArrs.length; i++) {
  let subSubArr = [];
  for (let start = 0; start < subArrs[i].length; start++) {
    for (let length = 0; start + length <= subArrs[i].length; length++) {
      let tempArr = subArrs[i].slice(start, start + length);
      if (tempArr.length > 1) {
        subSubArr.push(tempArr);
      }
    }
  }
  console.log('i: ', i);
  console.log('subArrs[i]: ', subArrs[i]);
  console.log('subSubArr: ', subSubArr);
  
}

// console.log('subArrs: ', subArrs);
// function uniqueSubstrings(string) {
//   let resultA = [];
//   for (let start = 0; start < string.length; start++) {
//     for (let leng = 1; leng + start <= string.length; leng++) {
//       resultA.push(string.slice(start, start + leng));
//     }
//   }
// }
