var findLargest = function(arr) {
    if(arr.length == 1) {
        return arr[0];
    }

    return getMax(arr, 0, arr.length-1);
}

var getMax = function(arr, start, end) {
    if(start >= end) {
        return arr[start];
    }

    let mid = Math.floor((start + end) / 2);
    let leftMax = getMax(arr, start, mid);
    let rightMax = getMax(arr, mid + 1, end);

    return Math.max(leftMax, rightMax);
}

const arr = [1, 5, -2, 100, 400, -900, 1];
let largest = findLargest(arr);
console.log(largest);