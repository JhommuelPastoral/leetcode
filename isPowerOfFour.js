function isPowerOfFour(n) {
    var sum = -Infinity;
    var i = 0;
    while (sum !== n) {
        sum = Math.pow(4, i);
        if (sum > n)
            return false;
        i++;
    }
    return true;
}
;
console.log(isPowerOfFour(16));
