const isPowerOfTwo = (input) => {
  let n = Number(input).toString(2)
  return n.indexOf(1) === n.lastIndexOf(1)
}

const countPowersOfTwo = (input) => {
  // returns the number of substrings of the input that are powers of 2
    let str = input
    let count = 0
    if(str === '') {
      return count
    } else {
       if (String(str[0]) === '0') {
         console.log('Im here');
         return count + countPowersOfTwo(str.slice(1))
       } else {
         for (let i  = 1; i <= str.length; i++ ) {
           if(isPowerOfTwo(str.slice(0,i))){
             count++
           }
         }
       }
      return count  + countPowersOfTwo(str.slice(1))
    }
}
// input must be string
