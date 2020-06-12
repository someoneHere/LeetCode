/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var result = []
  nums = nums.sort((a, b) => {return a - b})
  for (var i = 0; i < nums.length && nums[i] <= 0; i++) {
    var end = nums.length - 1
    // 当前的数值已经有遍历过了，则不需要再次遍历
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (var j = i + 1; j < end; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          for (k = end; k > j; k--) {
            if (k === end || nums[k] !== nums[k + 1]) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]])
                end = k
                break;
              }
            }
          }
        }
      }
    }
  }
  return result
}