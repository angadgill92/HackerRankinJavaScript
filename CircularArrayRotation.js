// circular array rotation

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
// -----------------------------------------------------

function main () {
  // Enter your code here
  var inputArray = readLine().split(' '); // maps the space separated input to n,kand q
  inputArray = inputArray.map(Number)
  var n = inputArray[0]
  var k = inputArray[1]
  var q = inputArray[2]

  var arr = readLine().split(' ')
  // console.log(arr)
  arr = arr.map(Number)
  // console.log(arr)
  var length = arr.length

  var r = (k % n) // r is the required number os rotations

  arr = arr.slice((length - r)).concat(arr.slice(0, (length - r))) // attaches
  // console.log(arr)

  for (var i = 0;i < q;i++) {
    var index = Number(readLine())
    console.log(arr[index])
  }
}
