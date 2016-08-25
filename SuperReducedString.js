// algorithms , strings, Super reduced string

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

// -------------------------------------------------

function reducedString (str) {
  if (str === '') // base case , if string is empty -> return empty string
    return ''
  else if (str[0] === str[1]) // if first two element of the string are the same remove and return result for sliced string
    return reducedString(str.slice(2))
  else
    return str[0] + reducedString(str.slice(1)) // keep the first element and append the result of the rest of the substring to it
}

function main () {
  var inputString = readLine()
  // inputString = inputString

  if (reducedString(inputString) != '')
    console.log(reducedString(inputString))
  else
    console.log('Empty String')
}
