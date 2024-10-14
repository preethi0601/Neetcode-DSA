/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   const n = nums.length;
   k = k % n; //3
   let res = []
   for(let i = 0; i < n; i++) {
    res[(i+k) % n] = nums[i];
   }
   for(let i=0;i<n; i++) {
    nums[i] = res[i]
   }
   return res
};