/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b) => a-b)
    let left=0, right =0, result=0, total=0;

    while(right < nums.length) {
        total += nums[right];

        while(nums[right] * (right - left +1) > total + k) {
            total -=nums[left]; left++;
        }
        result = Math.max(result, right - left + 1)
        right++;
    }
    return result;
};