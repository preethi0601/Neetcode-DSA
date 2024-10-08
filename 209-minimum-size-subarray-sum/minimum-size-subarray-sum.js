/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity
    let right = 0
    let sum = 0
    let left = 0
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            min = Math.min(min, (right - left + 1))
            sum -= nums[left]
            left++
        }
        right++
    }
    return min == Infinity ? 0 : min
};