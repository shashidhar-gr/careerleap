/**
 * 1089. Duplicate Zeros
 * https://leetcode.com/problems/duplicate-zeros/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let countZeros = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            countZeros++;
        }
    }

    let reader = arr.length-1, writer = arr.length + countZeros - 1;

    while(reader != writer) {
        insertNumber(arr, reader, writer);
        writer--;
        if(arr[reader] == 0) {
            insertNumber(arr, reader, writer);
            writer--;
        }
        reader--;
    }

    return arr;
};

var insertNumber = function(arr, reader, writer) {
    if(writer < arr.length) {
        arr[writer] = arr[reader];
    }
}

const arr = [0, 1];
console.log(duplicateZeros(arr));