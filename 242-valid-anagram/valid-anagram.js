/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    // return s.split('').sort().join('') === t.split('').sort().join('') ? true : false;  
    const hash = {}

    for(let val of s) {
        hash[val] = (hash[val] || 0) + 1;
    }
    console.log(hash);

    for(let i =0;i<t.length;i++) {
       if(!(t[i] in hash) || hash[t[i]] === 0) {
           return false;
       } else {
           hash[t[i]] -= 1;
       }
    }
    return true;
};