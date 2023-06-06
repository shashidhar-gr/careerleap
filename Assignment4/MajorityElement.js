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

        let leftElement = divide(arr, start, mid);
        let rightElement = divide(arr, mid + 1, end);

        if(leftElement == rightElement) {
            return leftElement;
        }

        let leftCount = countFrequency(arr, leftElement, start, end);
        let rightCount = countFrequency(arr, rightElement, start, end);

        return leftCount > rightCount ? leftElement: rightElement;
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

const arr = [2];
console.log(majorityElement(arr));