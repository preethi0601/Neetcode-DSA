/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];
     for(let num of nums) {
        let index = Math.abs(num) - 1;
        if(nums[index] < 0) result.push(Math.abs(num))
        else nums[index] = -nums[index];
     }
     return result;
};