const inAscendingOrder = (a, b) => a - b
const inDescendingOrder = (a, b) => b - a
const sum = (a, b) => a + b
const firstFourElements = [0, 4]

const min = arr => arr.sort(inAscendingOrder)
                      .slice(...firstFourElements)
                      .reduce(sum)

const max = arr => arr.sort(inDescendingOrder)
                      .slice(...firstFourElements)
                      .reduce(sum)
const main = (arr) => {
  arr = arr.split(' ').map(Number)
  console.log(min(arr), max(arr))
}

let a = '2 3 5 642 234'
main(a)
