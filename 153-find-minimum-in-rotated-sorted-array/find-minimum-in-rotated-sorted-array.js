/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //return Math.min(...nums)
    let left = 0, right = nums.length-1;
    while(left < right) {
        if(nums[left] < nums[right]) return nums[left]
        let mid = Math.floor((left+right) /2)
        if(nums[left] > nums[mid]) right = mid
        else left = mid+1
    }
    return nums[left]
};