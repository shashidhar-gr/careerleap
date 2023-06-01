/**
 * 74. Search a 2D Matrix.
    https://leetcode.com/problems/search-a-2d-matrix/
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = getRow(matrix, target);
    if(row != -1) {
        let index = binarySearch(matrix, target, row, 0, matrix[0].length-1);
        if(index != -1) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

var getRow = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        if(target >= matrix[i][0] && target <= matrix[i][matrix[i].length-1]) {
            return i;
        }
    }

    return -1;
}

var binarySearch = function(matrix, target, row, left, right) {
    if(left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if(matrix[row][mid] === target) {
        return mid; 
    }
    else if(matrix[row][mid] > target) {
        return binarySearch(matrix, target, row, left, mid - 1);
    }
    else {
        return binarySearch(matrix, target, row, mid + 1, right);
    }
    return -1;
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 20;
console.log(searchMatrix(matrix, target));
