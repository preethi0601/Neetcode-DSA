/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {}
    let result = []
    for(let i=0;i<strs.length;i++) {
        let tempstr = strs[i].split('').sort().join('')
        if(tempstr in hash) {
            hash[tempstr] = [...hash[tempstr], strs[i]]
        } else {
            hash[tempstr] = [strs[i]]
        }
    }
    for(let i in hash) result.push(hash[i])
    return result
};