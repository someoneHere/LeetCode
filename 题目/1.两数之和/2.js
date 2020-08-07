/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  nums.sort((a, b) => {
    return a - b
  })
  var startPoint = 0
  var endPoint = nums.length - 1
  while (startPoint < endPoint) {
    var sum = nums[startPoint] + nums[endPoint]
    if (sum === target) {
      return [startPoint, endPoint]
    } else if (sum > target) {
      endPoint--
    } else {
      startPoint++
    }
  }
}