// minimum distance

function main () {
  var n = parseInt(readLine())
  A = readLine().split(' ')
  A = A.map(Number)
  var distance = []
  for (var i = 0; i < A.length - 1; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] == A[j]) { // if ith element = jth element , push the difference in their indices to distance array
        var d = j - i
        distance.push(d)
      }
    }
  }
  if (distance.length === 0) // if distance array is empty (i.e no same elements were found)
    console.log(-1); // print -1
  else {
    distance = distance.map(Number)
    console.log(getMinOfArray(distance)) // else print the minimum of the distance found
  }
}
