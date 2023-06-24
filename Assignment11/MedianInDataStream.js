/**
 * 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 */

var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() > this.minHeap.size()) {
        this.minHeap.insert(num);
    }
    else {
        this.maxHeap.insert(num);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let median = Math.floor(this.maxHeap.peek() + this.minHeap.peek()) / 2;
    return median;
};

var MaxHeap = function() {
    this.data = [];
    this.index = 0;
}

MaxHeap.prototype.peek = function() {
    return this.index == 0 ? 0: this.data[1]; 
}

MaxHeap.prototype.insert = function(value) {
    this.index++;
    this.data[this.index] = value;

    let i = this.index;

    while(i >= 1) {
        let parentIndex = Math.floor(i / 2);
        if(this.data[i] > this.data[parentIndex]) {
            let temp = this.data[parentIndex];
            this.data[parentIndex] = this.data[i];
            this.data[i] = temp;
        }
        i = parentIndex;
    }
}

MaxHeap.prototype.delete = function() {
    
}

MaxHeap.prototype.size = function() {
    return this.index;
}

var MinHeap = function() {
    this.data = [];
    this.index = 0;
}

MinHeap.prototype.peek = function() {
    return this.index == 0 ? 0: this.data[1]; 
}

MinHeap.prototype.insert = function(value) {
    this.index++;
    this.data[this.index] = value;

    let i = this.index;

    while(i >= 1) {
        let parentIndex = Math.floor(i / 2);
        if(this.data[i] < this.data[parentIndex]) {
            let temp = this.data[parentIndex];
            this.data[parentIndex] = this.data[i];
            this.data[i] = temp;
        }
        i = parentIndex;
    }
}

MinHeap.prototype.delete = function() {
    
}

MinHeap.prototype.size = function() {
    return this.index;
}

/**
 * Brute force technique. Sorting and finding median.
 */
/*
var MedianFinder = function() {
    this.nums = [];
};

MedianFinder.prototype.addNum = function(num) {
    this.nums.push(num);
    this.nums = sort(this.nums, 0, this.nums.length - 1);
    return null;
};

MedianFinder.prototype.findMedian = function() {
    let median = -1;
    let middleIndex = -1;
    if(this.nums.length == 1) {
        return this.nums[0];
    }
    if(this.nums.length % 2 == 0) {
        middleIndex = Math.floor(this.nums.length / 2);
        median = Math.floor(this.nums[middleIndex - 1] + this.nums[middleIndex]) / 2;
    }
    else {
        middleIndex = Math.floor(this.nums.length / 2);
        median = this.nums[middleIndex];
    }

    return median;
};

var sort = function(nums, start, end) {
    if(start >= end) {
        return nums;
    }

    let partiotionIndex = partiotion(nums, start, end);
    sort(nums, start, partiotionIndex - 1);
    sort(nums, partiotionIndex + 1, end);

    return nums;
}

var partiotion = function(nums, start, end) {
    let reader = start, writer = start; pivot = nums[end];
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
*/

var obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
console.log(obj.findMedian());
obj.addNum(3)
console.log(obj.findMedian());
//var param_2 = obj.findMedian()