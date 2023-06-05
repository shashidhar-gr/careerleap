var maxsumsubarray = function(arr) {

}

var divide = function(arr, start, end) {
    let subarray = new SubArray();
    if(start >= end) {
        return subarray;
    }

    let mid = (start + end)/2;
    subarray = divide(arr, start, mid);
    subarray = divide(arr, mid+1, end);
    subarray = conquere(arr, start, mid, end);

    return subarray;
}

var conquere = function(arr, start, mid, end) {
    let subarray = new SubArray();

    
}

class SubArray {
    start = -1;
    end = -1;
    sum = 0;
}

let arr = [-7, -5, 8, -3, -4, 2, 7, -2];
console.log();