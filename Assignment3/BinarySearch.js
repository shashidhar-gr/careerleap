/**
 * 704. Binary Search.
    https://leetcode.com/problems/binary-search/
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(target < nums[0] || target > nums[nums.length-1]) {
        return -1;
    }
    let index = binarySearch(nums, target, 0, nums.length-1);
    return index;
};

var binarySearch = function(nums, target, left, right) {
    
    if(left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);
    
    if(nums[mid] === target) {
        return mid; 
    }
    else if(nums[mid] > target) {
        return binarySearch(nums, target, left, mid - 1);
    }
    else {
        return binarySearch(nums, target, mid + 1, right);
    }
    return -1;
};

let nums = [-1,0,3,5,9,12];
let target = 2;
console.log(search(nums, target));
