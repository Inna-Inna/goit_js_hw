var getExponent = function(x, n){
    var result = x;
    var counter = 1;
    if (n > 0) {
        for (counter; counter < n; counter++) {
            result *= x;
        }
        return result;
    } else if (n === 0){
        return 1;
    } else if ( n < 0) {
        for (counter; counter < -n; counter++) {
            result *= x;
        }
        return 1/result;
    } else {
        return "Cannot be computed!";
    }
};
console.log(getExponent(6, -3));