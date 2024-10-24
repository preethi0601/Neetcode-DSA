/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];
    for(let i=0; i<s.length;i++) {
        if(s[i] === '#') stack1.pop();
        else stack1.push(s[i]) 
    }
    for(let j=0; j<t.length;j++) {
        if(t[j] === '#') stack2.pop();
        else stack2.push(t[j])  
    }
    return stack1.join('') === stack2.join('')
};