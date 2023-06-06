/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let peakIndex = findPeakIndex(arr, 0, arr.length-1);
    return peakIndex;
};

var findPeakIndex = function(arr, start, end) {
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        else if(arr[mid] < arr[mid+1]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
}

const arr = [1, 2, 1];
console.log(peakIndexInMountainArray(arr));