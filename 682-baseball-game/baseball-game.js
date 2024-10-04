/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scoreStack = [];

    for(let op of operations) {
        if (!isNaN(op) || (op[0] === '-' && !isNaN(op.slice(1)))) scoreStack.push(parseInt(op));
        else if(op === 'C') scoreStack.pop();
        else if(op === 'D') scoreStack.push(scoreStack[scoreStack.length-1] * 2);
        else if (op === '+') scoreStack.push(scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 2] )
    }

    return scoreStack.reduce((a,b) => a+b, 0)
};