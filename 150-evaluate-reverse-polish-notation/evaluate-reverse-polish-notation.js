/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let i of tokens) {
        if(i === '+') {
            stack.push(stack.pop() + stack.pop())
        }
        else if(i === '-') {
            let temp = stack.pop()
            stack.push(stack.pop() - temp)
        }
        else if (i === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (i === "/") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first / second));
        } else {
            stack.push(parseInt(i));
        }
    }
    return stack[0]
};