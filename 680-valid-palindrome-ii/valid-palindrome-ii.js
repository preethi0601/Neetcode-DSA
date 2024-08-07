/**
 * @param {string} s
 * @return {boolean}
 */

const checkPalindrome = function(str, start, end) {
    while(start < end) {
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}
var validPalindrome = function(s) {
    if(s.length === 0 || s.length === 1 || s.length === 2) return true;
    let i=0; let j=s.length-1
    while(i < j) {
        if(s[i] !== s[j]) {
            return checkPalindrome(s,i+1,j) || checkPalindrome(s,i,j-1)
        }
        i++;j--;
    }
    return true;
};