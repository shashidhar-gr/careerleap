/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let max = divide(nums, 0, nums.length-1);
    return max;
}

var divide = function(arr, start, end) {
    while(start <= end) {
        if(start == end) {
            return arr[start];
        }

        let mid = Math.floor((start + end) / 2);

        let leftMajorityElement = divide(arr, start, mid);
        let rightMajorityElement = divide(arr, mid + 1, end);

        if(leftMajorityElement == rightMajorityElement) {
            return leftMajorityElement;
        }

        let leftMajorityCount = countFrequency(arr, leftMajorityElement, start, end);
        let rightMajorityCount = countFrequency(arr, rightMajorityElement, start, end);

        return leftMajorityCount > rightMajorityCount ? leftMajorityElement: rightMajorityElement;
    }
}

var countFrequency = function(arr, element, start, end) {
    let count = 0;

    for(let i = start; i <= end; i++) {
        if(element == arr[i]) {
            count++;
        }
    }

    return count;
}

// Bruteforce approach. TC: O(N^2)
/*var majorityElement = function(nums) {
    let majorityCount = 0;
    let majorityNum = 0;

    for(let i = 0; i < nums.length-1; i++) {
        let target = nums[i];
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            if(target == nums[j]) {
                count++;
            }
        }
        if(count > majorityCount) {
            majorityCount = count;
            majorityNum = target;
        }
    }

    return majorityNum;
}; */

const arr = [2,2,1,1,1,2,2];
console.log(majorityElement(arr));