var merge = function(arr, start, mid, end) {
    let i = start, j = mid+1;
    let leftArray = [], rightArray = [];

    let k = 0;
    while(i <= mid) {
        leftArray[k] = arr[i];
        k++;
        i++;
    }

    k = 0;
    while(j <= end) {
        rightArray[k] = arr[j];
        k++;
        j++;
    }

    i = 0, j = 0, k = start;
    while(i < leftArray.length && j < rightArray.length) {
        if(leftArray[i] > rightArray[j]) {
            arr[k] = rightArray[j];
            j++;
        }
        else {
            arr[k] = leftArray[i];
            i++;
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
}

var mergesort = function(arr, start, end) {
    if(start >= end) {
        console.log("hit base case. start: "+start+", end: "+end);
        return arr;
    }

    let mid = Math.floor((start + end) / 2);
    console.log("start: "+start+", mid: "+mid+", end: "+end);
    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);

    merge(arr, start, mid, end);
    return arr;
}

var sort = function(arr) {
    return mergesort(arr, 0, arr.length-1);
}


const arr = [1, 4, 3];
let sortedarr = sort(arr);
console.log(sortedarr);


