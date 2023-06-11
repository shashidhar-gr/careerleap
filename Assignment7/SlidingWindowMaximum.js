/**239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
};

var getMax = function(nums, start, end, k) {
    if(start == end) {
        return nums[start];
    }

    let index = partition(nums, start, end);
    let len = end - start + 1;
    if(k == (len - index)) {
        return nums[];
    }
}

var partition = function(nums, start, end) {
    let reader = start, writer = start;
    let pivot = nums[end];

    while(reader <= end) {
        while(nums[reader] <= pivot) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp;
            writer++;
        }
        reader++;
    }

    return writer - 1;
}