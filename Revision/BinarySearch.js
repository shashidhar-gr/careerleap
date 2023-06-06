var binarySearch = function(arr, target, start, end) {
    
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(target == arr[mid]) {
            return mid;
        }

        if(target < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
}

var search = function(arr, target) {
    let index = binarySearch(arr, target, 0, arr.length-1);
    return index;
}

const arr = [1, 2, 4, 5, 7, 10, 11, 21];
const target = 20;
const index = search(arr, target);
console.log(index);