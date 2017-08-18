const main= () => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let min = (max = sum - arr[0])
  for (let i = 0; i < arr.length; i++) {
    let tempSum = sum - arr[i]
    max = tempSum > max ? tempSum : max
    min = tempSum < min ? tempSum : min
  }
  console.log(min)
  console.log(max)
}
main()
