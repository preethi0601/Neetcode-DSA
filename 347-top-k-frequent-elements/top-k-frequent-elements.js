/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    let result = []
    for(let i in nums) {
        if(hash[nums[i]]) hash[nums[i]]++
        else hash[nums[i]] = 1
    }
    let sortedHash = Object.entries(hash).sort((a,b) => b[1]-a[1])
    console.log(sortedHash)
    for(let i=0;i<k && i<sortedHash.length;i++) {
        result.push(sortedHash[i][0])
    }
    return result
};