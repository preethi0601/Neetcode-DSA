/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let hash = {}
    let result = []
    for(let i=0;i<nums2.length;i++) {
        hash[nums2[i]] = i
    }
    for(let i=0;i<nums1.length;i++) {
        let num = nums1[i];
        for(let j = hash[num]; j < nums2.length;j++) {
            if(nums2[j] > num) {
                result.push(nums2[j])
                break;
            }
            if(j === nums2.length -1) result.push(-1)
        }
    }
    return result;
};