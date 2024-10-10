/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = []
    for(let d of num) {
        while(stack.length > 0 && k> 0 && stack[stack.length -1] > d) {
            stack.pop();
            k--;
        }
        stack.push(d)
    }
        while(k > 0) {
            stack.pop(); k--;
        }
        while(stack.length >0 && stack[0] == '0') {
            stack.shift()
        }
    return stack.length === 0 ? '0' : stack.join('')

};