let shifts = 0
const insert = (array) => { // takes an array as input and prints steps of insertion sort
  let tempArr = array
  let last = array[array.length - 1]
  let index = tempArr.length - 2

  while (index >= -1) {
    if (tempArr[index] > last) { // shift right
      tempArr[index + 1] = tempArr[index]
      shifts++
    } else if (tempArr[index] <= last) {
      tempArr[index + 1] = last
      break
    } else {
      tempArr[0] = last
      break
    }
    index--
  }
  return tempArr
}

const insertionSort = (array) => { // calls the insert function on sub arrays and
  for (let i = 2; i <= array.length; i++) {
    array = (insert(array.slice(0, i)).concat(array.slice(i)))
  }
  console.log(shifts)
}

const processData = (input) => {
  let unsortedArray = input.split('\n')
                           .map(a => a.split(' ')
                                      .map(Number))[1]
  insertionSort(unsortedArray)
}
