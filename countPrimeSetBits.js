function isPrime(n) {
    if (n < 2)
        return false;
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function countPrimeSetBits(left, right) {
    var res = 0;
    for (var i = left; i <= right; i++) {
        var bits = i.toString(2);
        var counter = 0;
        for (var _i = 0, bits_1 = bits; _i < bits_1.length; _i++) {
            var bit = bits_1[_i];
            if (bit === "1")
                counter++;
        }
        if (isPrime(counter))
            res++;
    }
    return res;
}
;
console.log(countPrimeSetBits(6, 10)); // Output: 4
console.log(countPrimeSetBits(10, 15)); // Output: 5
