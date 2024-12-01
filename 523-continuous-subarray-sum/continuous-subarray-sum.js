/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let n = nums.length, sum = 0;
    let hash = {0: -1}

  for (let i = 0; i < n; i++) {
    sum += nums[i]
    let remainder = sum % k

    if (hash[remainder] != undefined) {
      if ((i - hash[remainder]) >= 2) return true
    } else {
      hash[remainder] = i 
    }
  }
  return false
};