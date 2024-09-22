/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    let output = []

    for(let i=0;i<nums.length;i++){
        if(!set.has(i+1)) output.push(i+1)
    }
    return output

};