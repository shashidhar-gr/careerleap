/**
 * Magic Realm.
 * @param {Number} n 
 * @param {Number[]} nums 
 * @param {Number} maxOperations 
 * @returns 
 */
var problem2 = function(n, nums, maxOperations) {
    let maxNumber = 0;
    while(maxOperations > 0) {
        // Finding the largest number index.
        maxNumber = search(nums, 0, nums.length-1, 1);
        if(maxNumber % 2 == 0) {
            nums.push(maxNumber/2, maxNumber/2);
        }
        else {
            nums.push(Math.floor(maxNumber/2), maxNumber - Math.floor(maxNumber/2));
        }
        // Removing largest number.
        nums.splice(nums.indexOf(maxNumber), 1);
        maxOperations--;
    }

    maxNumber = search(nums, 0, nums.length-1, 1);
    return maxNumber;
}

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

let arr = [6, 7, 8, 9, 10];
const n = 5;
const noOfOperations = 2;

console.log(problem2(n, arr, noOfOperations));