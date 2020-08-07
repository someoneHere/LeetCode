/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var r2I = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = r2I[s[0]]
  let prev = result
  for (var i = 1; i < s.length; i++) {
    if (r2I[s[i]] > prev) {
      result -= prev * 2
    }
    prev = r2I[s[i]]
    result += prev
  }
  return result
}