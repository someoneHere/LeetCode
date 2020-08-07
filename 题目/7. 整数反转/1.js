/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var isNeg = x < 0
  var result = ''
  if (isNeg) {
    x *= -1
  }
  x += ''
  for (var i = x.length - 1; i >= 0; i--) {
    result += x[i]
  }
  result = isNeg ? result * -1 : result * 1
  return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0
}