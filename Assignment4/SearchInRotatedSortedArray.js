/**
 * 33. Search in Rotated Sorted Array.
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let valleyIndex = findValleyIndex(nums, 0, nums.length-1);
    let start = 0, end = 0;
    if(nums[valleyIndex] == target) {
        return valleyIndex;
    }
    if(target >= nums[0] && target <= nums[valleyIndex-1]) {
        start = 0;
        end = valleyIndex-1;
    }
    else {
        start = valleyIndex;
        end = nums.length-1;
    }
    let index = binarySearch(nums, target, start, end);
    return index;
};

var findValleyIndex = function(arr, start, end) {
    while(start <= end) {
        if(start == end) {
            return start;
        }
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] >= arr[0]) {
            start = mid + 1;
        }
        else if(arr[mid] < arr[0]) {
            end = mid;
        }
    }
} 

var binarySearch = function(arr, target, start, end) {
    
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(target == arr[mid]) {
            return mid;
        }

        if(target < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
}

const arr = [2];
const target = 2;
console.log(search(arr, target));