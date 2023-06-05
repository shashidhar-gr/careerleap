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

console.log(convertToBinary(233));