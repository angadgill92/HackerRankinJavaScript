// Kangaroo
function kangaroo (k1, k2) {
  /* takes the position and velocity vector of both kangaroos as input
  and returns YES if they land at the same position, and NO otherwise
  */


  var relDistance = k2[0] - k1[0]

  var relVelocity = Math.abs(k1[1] - k2[1])

  if (k2[1] >= k1[1]) { // if the velocity of both kangaroos is the same
    return ('NO')}
  else if (relDistance % relVelocity === 0) { // if the relative distance is exactly divisible by the relative velocity
    return ('YES')} else { // if relative distance is not divisible by relative velocity
    return ('NO')}
}
