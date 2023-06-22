/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/976880041/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap(nums.length);
    
    let j = 0;
    while(j < k) {
        minHeap.insert(nums[j]);
        j++;
    }

    for(let i = j; i < nums.length; i++) {
        if(nums[i] > minHeap.data[1]) {
            minHeap.delete();
            minHeap.insert(nums[i]);
        }
    }

    return minHeap.data[1];
};

var MinHeap = function(size) {
    this.data = new Array(size);
    this.index = 0;
}

MinHeap.prototype.delete = function() {
    this.data[1] = this.data[this.index];
    this.index--;

    let i = 1;

    while(i < this.index) {
        let left = i * 2;
        let right = i * 2 + 1;

        if(this.data[left] !== undefined && this.data[right] != undefined && this.data[left] < this.data[i] && this.data[left] <= this.data[right]) {
            let temp = this.data[left];
            this.data[left] = this.data[i];
            this.data[i] = temp;
            i = left;
        }
        else if(this.data[left] !== undefined && this.data[right] != undefined && this.data[right] < this.data[i] && this.data[right] <= this.data[left]) {
            let temp = this.data[right];
            this.data[right] = this.data[i];
            this.data[i] = temp;
            i = right;
        }
        else {
            return;
        }
    }
}

MinHeap.prototype.insert = function(value) {
    this.index++;

    this.data[this.index] = value;

    let i = this.index;
    
    while(i > 0) {
        let parentIndex = Math.floor(i / 2);
        if(this.data[parentIndex] != undefined && this.data[i] < this.data[parentIndex]) {
            let temp = this.data[i];
            this.data[i] = this.data[parentIndex];
            this.data[parentIndex] = temp;
        }
        else {
            return;
        }

        i = parentIndex;
    }
}

const nums = [3,2,3,1,2,4,5,5,6], k = 4;
//const nums = [3,2,1,5,6,4], k = 2;
const res = findKthLargest(nums, k);
console.log(res);