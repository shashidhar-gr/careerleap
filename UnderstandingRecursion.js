var reverseString = function(str) {
    console.log(str);
    if(str === "") {
        return str;
    }

    return reverseString(str.substring(1))+str.charAt(0);
}

var isPalindrome = function(str) {
    console.log(str);
    if(str.length == 0 || str.length == 1) {
        return true;
    }

    if(str.charAt(0) === str.charAt(str.length-1)) {
        return isPalindrome(str.substring(1, str.length-1));
    }

    return false;
}

var convertToBinary = function(num) {
    if(num == 0) {
        return 0;
    }

    if(num == 1) {
        return 1;
    }

    let rem = num % 2;

    return convertToBinary(Math.floor(num/2)) + "" + rem; 
}

var sumOfNaturalNumbers = function(n) {
    if(n <= 1) {
        return 1;
    }

    return n + sumOfNaturalNumbers(n-1);
}

var binarySearch = function(arr, start, end, target) {
    if(arr.length == 0) {
        return -1;
    }

    if(arr.length == 1) {
        if(arr[0] == target) {
            return 0;
        }
        else {
            return -1;
        }
    }

    if(start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] == target) {
        return mid;
    }

    if(arr[mid] > target) {
        return binarySearch(arr, left, mid-1, target);
    }
    else {
        return binarySearch(arr, mid+1, end, target);
    }
}

var search = function(arr, target) {
    return binarySearch(arr, 0, arr.length-1, target);
}

var fibonaccinumber = function(n) {
    if(n == 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }

    return fibonaccinumber(n-1) + fibonaccinumber(n-2);
}
console.log(fibonaccinumber(5));