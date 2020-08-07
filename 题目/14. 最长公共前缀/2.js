/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let length = strs.length
  if (length === 0) {
    return ''
  }
  let start = 0
  let end = strs[0].length
  let center
  let c
  let isSamp
  while (end > start) {
    center = Math.ceil((start + end) / 2)
    c = strs[0].slice(start, center)
    isSamp = true
    for (var i = 1; i < length; i++) {
      if (strs[i].slice(start, center) !== c) {
        isSamp = false
      }
    }
    if (isSamp) {
      start = center
    } else {
      end = center - 1
    }
  }
  return strs[0].slice(0, start)
};