"use strict";
function isPowerOfThree(n) {
    if (n <= 0)
        return false;
    for (let i = 0; i <= n; i++) {
        if (Math.pow(3, i) === n)
            return true;
        if (Math.pow(3, i) > n)
            return false;
    }
    return false;
}
;
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0));
