/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let right = nums.length -1;
    let left = mid =0;

    while(mid <= right) {
        if(nums[mid] === 0) {
            [nums[mid], nums[left]] = [nums[left], nums[mid]]
            left++; mid++;
        }
        else if(nums[mid] === 1) mid++;
        else if(nums[mid] === 2) {
            [nums[mid], nums[right]] = [nums[right], nums[mid]]
            right--;
        }
    }
};