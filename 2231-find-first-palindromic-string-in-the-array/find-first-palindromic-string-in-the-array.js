/**
 * @param {string[]} words
 * @return {string}
 */

let isPalindrome = (str) => {
    for(let i=0, j=str.length-1; i<j; i++,j--) {
        if(str[i] !== str[j]) return false; 
    }
    return true;
}

var firstPalindrome = function(words) {
    for(let i =0;i<words.length;i++) {
        if(isPalindrome(words[i])) {
            return words[i];
        }
    }
    return ''
};