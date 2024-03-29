const fs = require('fs');

// Read in a text file titled 'input.txt'
// IMPORTANT: The input file must be in the same directory as this file
const readFile = () => {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    // Find the number of days and window size
    const N = parseInt(data[0]);
    const K = parseInt(data[2]);
    let arr = [];
    let tempString = '';

    // Construct the array of home values
    for (let i = 4; i <= data.length; i++) {
      if (data[i] === ' ' || i === data.length) {
        arr.push(parseInt(tempString));
        tempString = '';
      }
      tempString += data[i];
    }

    // Call the function to find subranges within the home value array
    findRanges(N, K, arr);
  });
};

const findRanges = (N, K, arr) => {
  let errorMessages = [];

  // Check whether the input text tile is formatted correctly
  if (N > 200000 || N < 1) {
    errorMessages.push( 
      'Please enter a valid number of days N where 1 ≤ N ≤ 200,000');
  }
  if (K > N || K < 1) {
    errorMessages.push(  
      'Please enter a valid window size K where 1 ≤ K ≤ N days');
  }
  if (N !== arr.length) {
    errorMessages.push( 
      'Please enter a valid list of average home values with length N');
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1000000) {
      errorMessages.push( 
        'Please enter a valid list of average home values each under 1,000,000');
    }
  }

  // Print out any error messages
  for (let i = 0; i < errorMessages.length; i++) {
    console.log(errorMessages[i]);
  }

  
  // Find the windows within the array to examine
  let subArrs = [];
  for (let i = 0; i <= N - K; i++) {
    subArrs.push(arr.slice(i, i + K));
  } 
  
  // Find the subranges within the windows to examine
  for (let i = 0; i < subArrs.length; i++) {
    let counter = 0;
    let subranges = [];
    for (let start = 0; start < subArrs[i].length; start++) {
      for (let length = 0; start + length <= subArrs[i].length; length++) {
        let tempArr = subArrs[i].slice(start, start + length);
        if (tempArr.length > 1) {
          subranges.push(tempArr);
        }
      }
    } 
    
    // Check whether the subranges are increasing, decreasing, or neither
    for (let j = 0; j < subranges.length; j++) {
      let increasing = true;
      let decreasing = true;
      for (let k = 1; k < subranges[j].length; k++) {
        if (!decreasing && !increasing){
          break;
        } else if (subranges[j][k] < subranges[j][k - 1]) {
          increasing = false;
        } else if (subranges[j][k] > subranges[j][k - 1]) {
          decreasing = false;
        } else if (subranges[j][k] === subranges[j][k - 1]) {
          decreasing = false;
          increasing = false;
          break;
        }
      }
      if (increasing) {
        counter++;
      } else if (decreasing) {
        counter--;
      }
    } 
    
    // Print the result to the console
    if (errorMessages.length === 0) {
      console.log(counter);
    }
  }
};

readFile();


