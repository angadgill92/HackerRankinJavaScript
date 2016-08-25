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
