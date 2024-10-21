/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    let directories = path.split('/');
    console.log(directories)
    for(let dir of directories) {
        if(dir === '.' || !dir) continue;
        else if(dir === '..') {
            if(stack.length) stack.pop();
        }
            else stack.push(dir)
    }
    return '/' + stack.join('/')
};