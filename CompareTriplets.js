// Compare the triplets
// 3-Aug-2016
// angadgill92

function compareTriplets (alice, bob) {
  /* takes in two arrays of same length and prints the scores*/
  var index = alice.length - 1
  var aPts = 0
  var bPts = 0
  for ( var i = 0; i <= index;i++) {
    if (alice[i] === bob[i]) { // in case of a tie
      aPts += 0 // award zero points to both
      bPts += 0
    } else if (alice[i] > bob[i]) {
      aPts += 1 // award alice 1 point
    } else if (alice[i] < bob[i]) {
      bPts += 1 // award bob 1 point
    }
  }
  console.log(aPts, bPts); // print alice's and bobs points
}
