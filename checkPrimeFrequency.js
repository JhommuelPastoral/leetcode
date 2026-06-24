"use strict";
function isPrime(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function checkPrimeFrequency(nums) {
    var _a;
    const map = new Map();
    for (const num of nums)
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    for (const [key, value] of Array.from(map)) {
        if (isPrime(value))
            return true;
    }
    return false;
}
;
console.log(checkPrimeFrequency([1, 2, 2, 3, 3, 3])); // true
console.log(checkPrimeFrequency([1, 1, 1, 3])); // true
