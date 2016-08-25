// 12Hour to 24 HR to hour time notation

function toHours (time) {
  if (time[8] === 'P' && time.slice(0, 2) == '12') // if time is in PM and HH = 12
    return '12' + time.slice(2, 8) // remove PM notation

  else if (time[8] === 'P')
    return String(Number(time.slice(0, 2)) + Number(12)) + time.slice(2, 8)
  else if (time[8] === 'A' && time.slice(0, 2) === '12') //  if it is 12AM , returns 00 in place of HH
    return '00' + time.slice(2, 8); // return 00 succeeded by the rest of the time, remove AM notation

  else // for all AM times
    return time.slice(0, 8) // remove the AM notation

}
