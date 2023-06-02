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

reverseArray([1, 2, 3, 4]);



