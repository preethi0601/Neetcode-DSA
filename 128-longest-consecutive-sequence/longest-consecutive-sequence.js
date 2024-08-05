/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums)
    let longest = 0; 
    let length;

    for(let i=0;i<nums.length;i++){
        if(!numSet.has(nums[i] - 1)) {
            length = 0;
            while(numSet.has(length+nums[i])) {
                length++;
            }
            longest = Math.max(longest, length)
        }
    }
    return longest;
};