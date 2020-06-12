/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var result = []
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arr = [nums[i], nums[j], nums[k]].sort()
          if (!isExist(result, arr)) {
            result.push(arr)
          }
        }
      }
    }
  }
  return result
}

function isExist (target, arr) {
  for (var i = 0; i< target.length; i++) {
    let exist = true
    for (var j = 0; j < arr.length; j++) {
      if (target[i][j] !== arr[j]) {
        exist = false
      }
    }
    if (exist) {
      return true
    }
  }
  return false
}