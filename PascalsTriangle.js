/**
 * 118. Pascal's Triangle
    https://leetcode.com/problems/pascals-triangle/
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const finalarr = [];
    for(let i = 1; i <= numRows; i++) {
        const arr = []; 
        
        if(i == 1) {
            arr.push(1);
            finalarr.push(arr);
            continue;
        }
        
        if(i == 2) {
            arr.push(1);
            arr.push(1);
            finalarr.push(arr);
            continue;
        }
        
        arr.push(1);
        for(let j = 1; j < finalarr[i-2].length; j++) {
            arr.push(finalarr[i-2][j-1] + finalarr[i-2][j]);
        }
        arr.push(1);

        finalarr.push(arr);
    }

    return finalarr;
};

console.log(generate(30));