/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let ans = 0;
    for(let c = 65; c <= 90; c++) {
        let i = 0, j=0, replace = 0;
        while (j < s.length) {
            if(s[j] === String.fromCharCode(c)) {
                j++
            }
            else if(replace < k) { j++;  replace++;} 
            else if(s[i] === String.fromCharCode(c)) { i++; }
            else { i++; replace--; }
            ans = Math.max(ans, j - i)
        }
    }
    return ans;
};