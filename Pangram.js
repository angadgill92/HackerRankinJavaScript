// --------------------PANgram------------------------

function setHasN (set, iterable) {
  /* Takes a set and an iterable (array or string) as paramaeters and
  returns the number of elements of the iterable present in the set
  Note: if all the elements of the iterable are present in the set
  the function will return the length of the set*/

  var count = 0 // number of elements of the iterables present in the set
  for (var i = 0; i < iterable.length; i++) {
    if (set.has(iterable[i])) // using the .has method to check if the element is present in the set or not
      count += 1
    else count += 0
  }
  return count
}

// -------------------------------------------------
function main () {
  var s = readLine() // get input from user
  s = s.toLowerCase() // change every thing to lower case
  s = s.split('') // split the string into an array
  s.sort() // sort the array
  s = new Set(s) // remove duplicates from the array
  // s.delete(' ');        // delete space, from the set

  var alpha = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  // array of alphabets (also includes space)


  if (setHasN(s, alpha) === alpha.length)
  /* if all letters of the alphabet (including space) are in the set,
     the count returned will match the length of the alpha array */
  {console.log('pangram');}else {console.log('not pangram');}
}
