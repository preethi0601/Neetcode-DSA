/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1000000007;

    nums = nums.sort((a, b) => a - b);

    const pows = [1];
    
    for (let i = 1; i < nums.length; i++) {
        pows.push(pows[i - 1] * 2 % MOD);
    }
    
    let left = 0;
    let right = nums.length - 1;
    let res = 0;

    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            res = (res + pows[right - left]);
            left++;
        }
    }

    return res % MOD;
};