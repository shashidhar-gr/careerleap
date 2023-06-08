/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let num = search(nums, 0, nums.length-1, k);
    return num;
};

var search = function(nums, start, end, k) {
    if(start == end) {
        return nums[start];
    }
    let partitionIndex = partition(nums, start, end);
    if(k == (nums.length - partitionIndex)) {
        return nums[partitionIndex];
    }
    else if(k < (nums.length - partitionIndex)) {
        return search(nums, partitionIndex + 1, end, k);
    }
    else {
        return search(nums, start, partitionIndex - 1, k);
    }
}

var partition = function(nums, start, end) {
    let pivot = nums[end];
    
    let reader = start, writer = start;

    while(reader <= end) {
        if(nums[reader] <= pivot) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp;
            writer++;
        }
        reader++;
    }

    return writer - 1;
}