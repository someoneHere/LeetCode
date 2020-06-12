/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var result = []
  nums = nums.sort()
  for (var i = 0; i < nums.length && nums[i] <= 0; i++) {
    // 当当前的数值已经有遍历过了，则不需要再次遍历
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (var j = i + 1; j < nums.length; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          for (var k = j + 1; k < nums.length; k++) {
            if (k === j + 1 || nums[k] !== nums[k - 1]) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]])
              }
            }
          }
        }
      }
    }
  }
  return result
}