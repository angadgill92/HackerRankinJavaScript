// Diagonal Difference
function diagonalDifference (array, n) {
  var fwdSum = 0                        // sum of forward diagonal
  var bckSum = 0                        // sum of backward diagonal

  for (var i = 0; i < n;i++) {
    fwdSum += array[i][i]               // sums up the fwd diagonal elements
  }
  for (var j = 0; j < n; j++) {
    bckSum += array[j][n - j - 1]       // sums up the backward diagonal elements
  }
  return Math.abs(fwdSum - bckSum)      // returns the absolute value of diagonal difference


}
