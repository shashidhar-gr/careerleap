/**
 * Given an array, say A, two elements are inverted if A[i] > A[j] but i < j. 
 * Count total number of inversion.
 * Ex: [2, 5, 8, 11, 6, 7, 10, 14]
 * Ans: 5.
 * @param {*} arr 
 * @returns number
 */
/**
 * Using divide and conquere technique. TC: O(NlogN)
 */
var conuntInversion = function(arr) {
    let count = divide(arr, 0, arr.length-1);
    return count;
}

var conquere = function(arr, start, mid, end) {

    let leftArray = [], rightArray = [], k = 0, count = 0;
    for(let i = start; i <= mid; i++) {
        leftArray[k] = arr[i];
        k++;
    }

    k = 0;
    for(let i = mid+1; i <= end; i++) {
        rightArray[k] = arr[i];
        k++;
    }

    let i = 0, j = 0; k = start;

    while(i < leftArray.length && j < rightArray.length) {
        if(leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        }
        else {
            count = count + ((mid + 1) - i);
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while(i < leftArray.length) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while(j < rightArray.length) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }

    return count;
}

var divide = function(arr, start, end) {
    let count = 0;
    if(start >= end) {
        return count;
    }

    let mid = Math.floor((start + end) / 2);
    count += divide(arr, start, mid);
    count += divide(arr, mid+1, end);
    count += conquere(arr, start, mid, end);
    
    return count;
}

/* Brute force solution.
// Using insertion sort technique. TC O(N^2)
var conuntInversion = function(arr) {
    let count = 0;
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j] && i < j) {
                count++;
            }
        }
    }

    return count;
} */

let count = conuntInversion([2, 5, 8, 11, 6, 7, 10, 14]);
console.log(count);