/**
 * 73. Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroIndices = [];
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] == 0) {
                zeroIndices.push([row, col]);
            }
        }
    }

    for(let i = 0; i < zeroIndices.length; i++) {
        update(matrix, zeroIndices[i][0], zeroIndices[i][1]);
    }
};

let update = function(matrix, row, col) {
    for(let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0;
    }
    for(let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}