/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency = getFrequency(nums);
    let order = orderElements(nums, frequency);

    let count = 0, result = [];
    for(let i = order.length - 1; i > 0; i--) {
        let frequenyOfElements = order[i];
        if(frequenyOfElements == undefined) {
            continue;
        } 
        for(let j = frequenyOfElements.length - 1; j >= 0; j--) {
            if(count < k) {
                result.push(frequenyOfElements[j]);
                count++;
                if(count == k) {
                    return result;
                }
            }
        }
    }

    return result;
};

var orderElements = function(nums, frequency) {
    let order = new Array(nums.length + 1);
    if(Object.seal) {
        order.fill(undefined);
        Object.seal(order);
    }

    frequency.forEach((value, key, map) => {
        if(order[value] == undefined) {
            order[value] = [key];
        }
        else {
            order[value].push(key);
        }
    });
    return order;
}

var getFrequency = function(nums) {
    let hashMap = new Map();

    nums.forEach((element) => {
        if(hashMap.has(element) == true) {
            hashMap.set(element, hashMap.get(element) + 1);
        }
        else {
            hashMap.set(element, 1);
        }
    });

    return hashMap;
}

const arr = [1,1,1,2,2,3];
const k = 2;
console.log(topKFrequent(arr, k));