var countPeoples = function(n) {
    if(n == 1) {
        return 0;
    }
    else {
        return 1 + countPeoples(n-1);
    }
}

console.log(countPeoples(4));