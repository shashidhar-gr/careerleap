var merge = function(arr, start, mid, end) {
    let leftArray = [], rightArray = [], k = 0;
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
        if(leftArray[i] < rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        }
        else {
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
}

var sort = function(arr, start , end) {
    if(start >= end)
        return arr;
    
    let mid = Math.floor((end + start)/2);
    sort(arr, start, mid);
    sort(arr, mid+1, end);
    merge(arr, start, mid, end);
    return arr;
}

var mergeSort = function(arr) {
    return sort(arr, 0, arr.length-1);
}