/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let hash = {};
    let result = 0;

    nums.forEach((num) => {
        hash[num] = (hash[num] | 0) + 1;
    })

    for(let n in hash) {
        if(hash[n] < 2) return -1;
        result += Math.ceil(hash[n] / 3);
    }
    return result;
};