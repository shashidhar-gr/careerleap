class MaxSum {
    sum = 0;
    start = -1;
    end = -1;

    constructor(sum, start, end) {
        this.sum = sum;
        this.start = start;
        this.end = end;
    }
}

var maxCrossingSum = function(arr, start, mid, end) {
    let leftMaxSum = Number.NEGATIVE_INFINITY, sum = 0, leftMaxIndex = mid;
    for(let i = mid; i >= start; i--) {
         sum = sum + arr[i];
        if(sum > leftMaxSum) {
            leftMaxSum = sum;
            leftMaxIndex = i;
        }
    }

    let rightMaxSum = Number.NEGATIVE_INFINITY, rightMaxIndex = mid + 1;
    sum = 0;
    for(let i = mid + 1; i <= end; i++) {
        sum = sum + arr[i];
        if(sum > rightMaxSum) {
            rightMaxSum = sum;
            rightMaxIndex = i;
        }
    }

    let crossMaxSum = rightMaxSum + leftMaxSum;

    return new MaxSum(crossMaxSum, leftMaxIndex, rightMaxIndex);
}

var findMaxSum = function(arr, start, end) {
    if(start >= end) {
        let maxSum = new MaxSum(arr[start], start, end);
        return maxSum;
    }

    let mid = Math.floor((start + end) / 2);

    let leftMax = findMaxSum(arr, start, mid);
    let rightMax = findMaxSum(arr, mid + 1, end);
    let crossMax = maxCrossingSum(arr, start, mid, end);

    if(crossMax.sum >= leftMax.sum && crossMax.sum >= rightMax.sum) {
        return crossMax;
    }
    else if(leftMax.sum >= crossMax.sum && leftMax.sum >= rightMax.sum) {
        return leftMax;
    }
    else {
        return rightMax;
    }
}

var maxSumSubarray = function(arr) {
    return findMaxSum(arr, 0, arr.length-1);
}

const arr = [-2,1,-3,4,-1,2,1,-5,4];
let maxSum = maxSumSubarray(arr);
console.log(maxSum);