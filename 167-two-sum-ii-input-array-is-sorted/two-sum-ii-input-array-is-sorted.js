/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0; 
    let j = numbers.length - 1;
    while(i < j) {
        let total = numbers[i] + numbers[j];
        if(total === target) return [i+1,j+1];
        if(total > target) j--;
        else {
            i++
        }
    }
    return []
};