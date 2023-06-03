var countPeoples = function(n) {
    if(n == 1) {
        return 0;
    }
    else {
        return 1 + countPeoples(n-1);
    }
}

//console.log(countPeoples(4));

var sumOfTwoPositiveNumbers = function(x, y) {
    console.log("x: "+x+", y: "+y);
    if(y == 0)
        return x;

    if(y > 0)
        return 1 + sumOfTwoPositiveNumbers(x, y-1);
}

//console.log(sumOfTwoPositiveNumbers(1, 1));

var factorial = function(n) {
    if(n == 0) 
        return 1;

    if(n > 0)
        return n * factorial(n-1); 
}

//console.log(factorial(5));

var reverse = function(arr, i , j) {
    if( j <= i )
        return arr;

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return reverse(arr, i+1, j-1);
}

var reverseArray = function(arr) {
    console.log(reverse(arr, 0, arr.length-1));
}

//reverseArray([1, 2, 3, 4]);

var gcdOfNumbers = function(a, b) {
    if(b == 0)
        return a;
    
    if(a > b)
        return gcdOfNumbers(b, a % b);
    else 
        return gcdOfNumbers(a, b % a);
}

//console.log(gcdOfNumbers(12, 15));

var merge = function(arr, left, mid, right) {
    let i = left, j = mid;

    while(i <= mid-1 && j <= right) {
        if(arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

var sort = function(arr, left , right) {
    console.log("left: "+left+", right: "+right);
    if(left >= right) {
        return arr;
    }
    let mid = Math.floor(left + (right-1) / 2);
    sort(arr, left, mid-1);
    sort(arr, mid, right);
    merge(arr, left, mid, right);
}

var mergeSort = function(arr) {
    console.log(sort(arr, 0, arr.length-1))
}

console.log(mergeSort([2, 1, 4, 3]));



