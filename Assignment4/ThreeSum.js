/**
 * 15. 3 Sum.
    https://leetcode.com/problems/3sum/
*/

const sort = require('../Assignment3/MergeSort');
const search = require('../Assignment3/BinarySearch');

var threeSum = function(arr, target) {
    let finalres = [];
    arr = sort(arr);
    for(let i = 0; i < arr.length; i++) {
        let res = [];
        res = twoSum(arr, target-arr[i]);
        if(res.length != 0) {
            res.forEach((pair) => {
                if(pair[0] != i && pair[1] != i) {
                    pair.push(arr[i]);
                    finalres.push(pair);
                }
            });
        }
    }

    return finalres;
}

var twoSum = function(arr, target) {
    let finalres = [];
    for(let i = 0; i < arr.length; i++) {
        let res = [];
        let searchIndex = search(arr, target-arr[i]);
        if(searchIndex != -1 && searchIndex != i) {
            res.push(i, searchIndex);
            finalres.push(res);
        }
    }

    return finalres;
}

class pair {
    index = -1;
    value = 0;
}

const arr = [-1, 0, 1, 2, -1, -4];
const target = 0;
const res = threeSum(arr, target);
console.log(res);
module.exports = threeSum;