/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let tempSum = 0, count = 0;
    let hash = { 0: 1};
    for(let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        if(hash[tempSum - k]!== undefined) {
            count += hash[tempSum - k]
        }
        hash[tempSum] = (hash[tempSum] | 0) +1;
    }
    return count;
};