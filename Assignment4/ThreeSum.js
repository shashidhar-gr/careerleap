/**
 * 15. 3 Sum.
    https://leetcode.com/problems/3sum/
*/

const sort = require('../Assignment3/MergeSort');
//TC: O(N^2)
var threeSum = function(arr, target) {
    let finalres = [];
    arr = sort(arr);
    for(let i = 0; i < arr.length; i++) {
        
        //Skipping duplicates.
        if(i > 0 && arr[i] == arr[i-1]) {
            continue;
        }
        let left = i + 1, right = arr.length-1;        
        while(left < right) { //Skipping duplicates.
            let threeSum = arr[i] + arr[left] + arr[right];
            if(threeSum == target) {
                let res = [];
                res.push(arr[i], arr[left], arr[right]);
                finalres.push(res);
                left++;
                while(arr[left] == arr[left-1] && left < right) {
                    left++;
                }
            }
            else if(threeSum > target){
                right--;
            } 
            else {
                left++;
            }
        }

    }
    return finalres;
}

const arr = [-1,0,1,2,-1,-4];
const target = 0;
const res = threeSum(arr, target);
console.log(res);
module.exports = threeSum;