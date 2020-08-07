/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  let result = ''
  let c = ''
  for (var i = 0; i < strs[0].length; i++) {
    c = strs[0][i]
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i] !== c || strs[j][i] === undefined) {
        return result
      }
    }
    result += c
  }
  return result
};