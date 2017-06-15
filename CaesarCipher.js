
const caesarShift = l => {
  let ascii = l.charCodeAt()
  if (ascii >= 65 && ascii <=  90) return String.fromCharCode(65 + ((ascii - 65 + k) % 26))
  if (ascii >= 97 && ascii <= 122) return String.fromCharCode(97 + ((ascii - 97 + k) % 26))
  return l}
    
const main = (n = parseInt(readLine()), let s = readLine(), k = parseInt(readLine())) => s.split('')
                                                                                          .map(caesarShift)
                                                                                          .join('')
