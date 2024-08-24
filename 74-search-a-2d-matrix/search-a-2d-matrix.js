/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
 let left = 0; 
    let right = matrix.length-1;
    let index = -1;

    while( left <= right ){
        let mid = Math.floor( ( left + right ) / 2 );
        if( matrix[mid][0] <= target  && matrix[mid][matrix[mid].length-1] >= target ){
            left = 0;
            right = matrix[mid].length-1;
            index = mid
            break
        }
        if( matrix[mid][0] < target ){
            left  = mid+1
        }else{
            right = mid-1
        }
    }
    while(left <= right ){
        let mid = Math.floor(( left + right ) / 2 );
        if( matrix[index][mid] == target ){
            return true 
        }
        if( matrix[index][mid] < target ){
            left  = mid+1
        }else{
            right = mid-1
        }
    }
    return false
}