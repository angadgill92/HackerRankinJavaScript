process.stdin.resume()
process.stdin.setEncoding('ascii')

var input_stdin = ''
var input_stdin_array = ''
var input_currentline = 0

process.stdin.on('data', function (data) {
  input_stdin += data
})

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n')
  main()
})

function readLine () {
  return input_stdin_array[input_currentline++]
}

function arraySum (array) {
  /*Takes an array as input and returns it's sum*/
  if (array.length === 0) {
    // base case, if array is empty -> length == 0
    // return 0
    return 0
  } else {
    // resursive step
    // return first element + sum of rest of the array
    return array[0] + arraySum(array.slice(1))
  }
}
var loafCount = 0 // global variable denoting loaf count
function loaf (arr) {
  if (arr.length === 0) { // if array is completely traversed return leafCount
    return loafCount
  } else if (arr[0] % 2 === 0)
    return loafCount + loaf(arr.slice(1))
  else {
    return loafCount + 2 + loaf(arr.slice(1))
  }
}

function main () {
  var N = parseInt(readLine())
  B = readLine().split(' ')
  B = B.map(Number)
  var loafCount = 0
  if (arraySum(B) % 2 != 0) {
    console.log('NO')
  } else {
    console.log(loaf(B))
  }
}
