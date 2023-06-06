/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let max = divide(arr, 0, arr.length-1);
    return max;
}

var divide = function(arr, start, end) {
    while(start <= end) {
        if(start == end) {
            return arr[start];
        }

        let mid = Math.floor((start + end) / 2);

        let leftMajority = divide(arr, start, mid);
        let rightMajority = divide(arr, mid + 1, end);

        if(leftMajority == rightMajority) {
            return leftMajority;
        }

        let leftMajorityCount = countFrequency(arr, leftMajority, start, end);
        let rightMajorityCount = countFrequency(arr, rightMajority, start, end);

        return leftMajorityCount > rightMajorityCount ? leftMajority: rightMajority;
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

//const arr = [2, 2, 2, 4, 4, 4, 4, 5, 5];
const arr = [2, 2, 2, 4, 4, 4, 4, 5, 5];
console.log(majorityElement(arr));