/**
 * @param {string} s
 * @return {number}
 */
var getValue = function (s) {
  switch (s) {
    case 'I': return 1
    case 'V': return 5
    case 'X': return 10
    case 'L': return 50
    case 'C': return 100
    case 'D': return 500
    case 'M': return 1000
  }
}

var romanToInt = function (s) {
  let result = 0
  let prev = result
  let value
  for (var i = s.length - 1; i >= 0; i--) {
    value = getValue(s[i])
    if (value < prev) {
      result -= value
    } else {
      result += value
    }
    prev = value
  }
  return result
}