/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = 0, neg = 1;
    let result = []

    for(let i=0;i<nums.length;i++) {
        if(nums[i] < 0) {
            result[neg] = nums[i]; neg += 2
        } else {
            result[pos] = nums[i]; pos += 2
        }
    }
    return result
};