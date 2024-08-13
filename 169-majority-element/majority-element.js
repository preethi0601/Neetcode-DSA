/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let n = Math.floor(nums.length/2)
   let hash = {}
   let majority = 0, res = 0;
   for(let i =0; i<nums.length;i++) {
    if(nums[i] in hash) hash[nums[i]]++;
    else hash[nums[i]] = 1
    if(hash[nums[i]] > n) {
        majority = Math.max(majority, hash[nums[i]])
        res = nums[i]
    }
   }
   return res 
};