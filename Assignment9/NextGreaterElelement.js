/** 496. Next Greater Element I
 * https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = nums2;

    if(arr.length == 0) {
        return [];
    }

    let hashMap = {};

    let stack = new Stack(arr.length);

    stack.push(arr[arr.length - 1]);
    hashMap[arr[arr.length-1]] = -1;

    for(let i = arr.length-2; i >= 0; i--) {
        while(stack.isEmpty() == false && stack.top() < arr[i]) {
            stack.pop();
        }

        if(stack.top() > arr[i]) {
            hashMap[arr[i]] = stack.top();
        }
        else {
            hashMap[arr[i]] = -1;
        }
        
        stack.push(arr[i]);
    }

    let finalres = [];
    for(let i = 0; i < nums1.length; i++) {
        finalres[i] = hashMap[nums1[i]];
    }
    return finalres;
}

class Stack {
    data = [];
    index =  -1;
    capacity = 0;

    constructor(size) {
        this.capacity = size;
    }

    isEmpty() {
        return (this.index == -1);
    }

    push(element) {
        if(this.index >= this.capacity - 1)
            throw Error("Stack is full");
        
        this.index++;
        this.data[this.index] = element;
    }

    pop() {
        if(this.index == -1)
            throw Error("Stack is empty");

        return this.data[this.index--];
    }

    top() {
        if(this.index > -1) {
            return this.data[this.index];
        }
        return null;
    }

    size() {
        return this.index + 1;
    }
}

//const arr = [1, 5, 8, 3, 7, 11];
const nums1 = [1, 5, 8, 3, 7, 11];
const nums2 = [1, 5, 8, 3, 7, 11];
const res = nextGreaterElement(nums1, nums2);
console.log(res);