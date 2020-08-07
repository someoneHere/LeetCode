/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let x2 = 0
  while (x2 < x) {
    x2 = x2 * 10 + x % 10
    x = (x - x % 10) / 10
  }
  return x === x2 || x * 10 + x2 % 10 === x2
}