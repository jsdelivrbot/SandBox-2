// 1 ≤ N ≤ 200,000 days
// 1 ≤ K ≤ N days

// Input Format
// Your solution should accept an input file (input.txt) 
// with the following contents:
// Line 1: Two integers, N and K.
// Line 2: N positive integers of average home sale price, 
// each less than 1,000,000.

// Output Format
// Your solution should output one integer for each window’s result, 
// with each integer on a separate line, to an output file or to the console.
// Sample Input
// 5 3
// 188930 194123 201345 154243 154243
// Sample Output
// 3
// 0
// -1
// Explanation
// For the first window of [188930, 194123, 201345], 
// there are 3 increasing subranges ([188930, 194123, 201345], 
// [188930, 194123], and [194123, 201345]) and 0 decreasing, 
// so the answer is 3. For the second window of [194123, 201345, 154243], 
// there is 1 increasing subrange and 1 decreasing, so the answer is 0. 
// For the third window of [201345, 154243, 154243], there is 1 
// decreasing subrange and 0 increasing, so the answer is -1.
