function isPrime(n) {
    if (n <= 1)
        return false;
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function checkPrimeFrequency(nums) {
    var _a;
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(map); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (isPrime(value))
            return true;
    }
    return false;
}
;
console.log(checkPrimeFrequency([1, 2, 2, 3, 3, 3])); // true
console.log(checkPrimeFrequency([1, 1, 1, 3])); // true
