/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    let lcp = strs[0]
    for(let i=1;i<strs.length;i++) {
        let min = Math.min(lcp.length, strs[i].length)
        let res = ''
        for(let j=0;j<min;j++) {
            if(lcp[j] === strs[i][j]) res+=lcp[j]
            else {
                break;
            }
        }
        lcp = res;
    }
    return lcp;
};