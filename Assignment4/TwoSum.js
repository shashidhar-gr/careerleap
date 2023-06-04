/**
 * 1. 2 Sum.
    https://leetcode.com/problems/two-sum/
*/

const sort = require('../Assignment3/MergeSort');
const search = require('../Assignment3/BinarySearch');

var twoSum = function(arr, target) {
    arr = sort(arr);
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let searchIndex = search(arr, target-arr[i]);
        if(searchIndex != -1 && searchIndex != i) {
            res.push(i, searchIndex);
            return res;
        }
    }

    return res;
}

module.exports = twoSum;


