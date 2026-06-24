"use strict";
function validDigit(n, x) {
    const set = new Set(n.toString());
    if (Number.parseInt(n.toString()[0]) === x)
        return false;
    return set.has(x.toString());
}
;
console.log(validDigit(123, 1)); // true
console.log(validDigit(123, 4)); // false
console.log(validDigit(123, 2));
