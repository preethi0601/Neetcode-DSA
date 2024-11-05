/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0, end = x;
    let result = 0;
    if(x === 1) return 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(mid * mid > x) end = mid - 1;
        else {
            start = mid + 1;
            result = mid;
        }
    }
    return result
};