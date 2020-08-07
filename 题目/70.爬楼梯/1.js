let climbStairs = function (n) {
  let result = 1
  let prev1 = 0
  for (let i = 1; i <= n; i++) {
    result = result + prev1
    prev1 = result - prev1
  }
  return result
}