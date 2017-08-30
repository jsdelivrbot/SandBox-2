// const voteTally = votes => {
//   // Set up an object to keep track of the tally
//   const tally = new Object();
//   let voteLeaders = [];
//   let maxVotes = 0;

//   // Loop through the votes and tally the frequency of each name
//   votes.forEach(name => {
//     tally[name] = (tally[name] || 0) + 1;
//   });

//   // Check if the tally for each name is greater than the current leader(s)
//   for (let name in tally) {
//     if (tally[name] > maxVotes) {
//       maxVotes = tally[name];
//       voteLeaders = [name];
//     } else if (tally[name] === maxVotes) {
//       voteLeaders.push(name);
//     }
//   }

//   // sort the voteLeaders, then reverse the order and return the first entry
//   return voteLeaders.sort().reverse()[0];
// };

// let votes = ['bob', 'tom', 'bob', 'carl', 'carl'];
// console.log(voteTally(votes));

const maxDifference = array => {
  let differences = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        differences.push(array[j] - array[i]);
      }
    }
  }
  if (differences.length === 0) {
    return -1
  }
  return differences.sort().reverse()[0]
};


for (let i = 1; i < steps; i++)
{
    for (let j = 0; j < steps; j++)
    {
        if (lines[i][j] < lines[i - 1][j])
        {
            Console.WriteLine("NO");
            return;
        }
    }
}

Console.WriteLine("YES");