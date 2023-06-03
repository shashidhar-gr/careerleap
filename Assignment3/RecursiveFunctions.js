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

var merge = function(arr, start, mid, end) {
    console.log("combining array. start: "+start+", end: "+end);
    let leftArray = [], rightArray = [], k = 0;
    for(let i = start; i <= mid; i++) {
        leftArray[k] = arr[i];
        k++;
    }

    console.log("left array: ");
    console.log(leftArray);

    k = 0;
    for(let i = mid+1; i <= end; i++) {
        rightArray[k] = arr[i];
        k++;
    }

    console.log("right array: ");
    console.log(rightArray);

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
    console.log("dividing array. start: "+start+", end: "+end);
    
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

console.log(mergeSort([5,1,1,2,0,0]));



