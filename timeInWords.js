const timeInWords = (hrs, min) => {
  /* Function that takes hours and minutes of time (integers) as input and returns the time in words */
  let time = ['',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
    'half']

  if (min === 0) {
    return time[hrs] + ' ' + "o' clock"
  } else if (min === 15 || min === 30) {
    return time[min] + ' past ' + time[hrs]
  } else if (min < 30) {
    return time[min] + ' minutes past ' + time[hrs]
  } else if (min === 45) {
    return time[15] + ' to ' + time[hrs + 1]
  } else {
    return time[60 - min] + ' minutes to ' + time[hrs + 1]
  }
}
