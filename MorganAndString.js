// Morgan and String
// Note : need to implement a greedy solution for this, not yet complete
// will come back to it later
function minString (stackA, stackB) {
  /*Takes two strings as input and returns the lexicographically minimum
  string that can be made by using their characters alternatively one at a time */

  // convert the strings into arrays
  stackA = stackA.split('')
  stackB = stackB.split('')
  var tempArray = [] // array to store the returned characters
  var last = '' // variable to store the last stack that ws used
  while ((stackA.length != 0) && (stackB.length != 0)){ // while both of the strings are non-empty
    if (stackA[0] < stackB[0]) { // if first character of stackA is smaller than stackB, push it into temp array
      tempArray.push(stackA.shift())
      last = 'A'; // set last = A
    }
    else if (stackA[0] === stackB[0]) { // if both stacks have the same character on top, pop the char
      // from the stack which was not used last
      if (last === 'A') {
        tempArray.push(stackB.shift())
        last = 'B';}else {
        tempArray.push(stackA.shift())
        last = 'A';}
    } else { // else pop the char from stack b and push it into the array
      tempArray.push(stackB.shift())
      last = 'B'
    }
  }
  if ((stackA.length != 0) && (stackB.length === 0)) { // if stack A is still not empty, push all characters in stack A to temp
    tempArray.push(stackA.join(''))
  } else if ((stackB.length != 0) && (stackA.length === 0)) { // else push the leftover of stack B to temp
    tempArray.push(stackB.join(''));}
  var returnedString = tempArray.join('') // join all the characters of temp
  return returnedString // return the output string
}
