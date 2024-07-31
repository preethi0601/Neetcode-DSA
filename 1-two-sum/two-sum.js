/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let result = {}
   for(let i=0;i<nums.length;i++) {
    if(target - nums[i] in result) {
        return [i, result[target-nums[i]]] 
    }
    result[nums[i]] = i;
   }
};