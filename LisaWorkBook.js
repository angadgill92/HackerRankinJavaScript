// lisa's workbook
function main () {
  var arr_temp = readLine().split(' ')
  var n = parseInt(arr_temp[0]) // total number of chapters
  var k = parseInt(arr_temp[1]); // problem's per page

  var problemsOf = readLine().split(' ')
  problemsOf = problemsOf.map(Number) // array to store number of problems per chapter
  console.log(problemsOf)
  var splCount = 0 // number of special problems
  var chapterNumber = 0 // number of current chapter
  var pageNumber = 1 // Starting from page 1
  var problemNumber = 1 // Starting from the frst problem

  while (chapterNumber < n) {
    if (problemNumber === pageNumber && pageNumber <= (Math.min((problemNumber + k - 1), problemsOf[chapterNumber]))) {splCount++ ; console.log(problemNumber, pageNumber);} // increment number of special problems by 1
    // pageNumber++       // increment page number
    // problemNumber += k
    pageNumber++ // increment page number
    problemNumber += k // increment problem Number by k

    if (problemNumber > problemsOf[chapterNumber]) { // if the new problem number obtained is greater than
      chapterNumber++ // increment chapter number by one
      problemNumber = 1 //
    }
  }
  console.log(splCount)
}
