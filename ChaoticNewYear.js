// Chaotic New Year

function chaoticNewYear (array) {
  var count = 0 // stores the minimum number of bribes

  for (var i = array.length - 1; i >= 0;i--) {
    if (array[i] - (i + 1) > 2) { /* if difference between ith element(i.e. number on the sticker)
                                        and the position of the person(i+1) is greater than 2
                                        return 'Too chaotic', since maximum positions a person can jump is 2*/
      return 'Too chaotic';}

    for (var j = Math.max(0, array[i] - 2); j < i; j++) { /* checks if the ith person has overtaken the jth person and increases count*/
      if (array[j] > array[i])
        count++
    }
  }
  return count
}
