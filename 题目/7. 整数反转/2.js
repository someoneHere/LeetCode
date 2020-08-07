/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var result = 0
  var temp
  var minVal = -Math.pow(2, 31)
  var maxVal = -minVal - 1
  while (x !== 0) {
    temp = x % 10
    x = (x - temp) / 10
    result = result * 10 + temp
  }
  return result >= minVal && result <= maxVal ? result : 0
}