/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = binarySearch(nums, target, 0, nums.length-1);
    return index;
};

var binarySearch = function(nums, target, start, end) {
    
    if(start >= end) {
        if(target == nums[start]) {
            return start;
        }
        else {
            return -1;
        }
    }
    
    let mid = Math.floor((start + end) / 2);

    if(target == nums[mid]) {
        return mid;
    }
    else if(target > nums[start] && target < nums[mid]) {
        return binarySearch(nums, target, start, mid);
    }
    else {
        return binarySearch(nums, target, mid + 1, end);
    }

    return -1;
}

const arr = [5,1,2,3,4];
const target = 1;
console.log(search(arr, target));