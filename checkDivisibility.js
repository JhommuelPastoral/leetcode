function checkDivisibility(n) {
    var sum = 0;
    var productSum = 1;
    for (var _i = 0, _a = n.toString(); _i < _a.length; _i++) {
        var char = _a[_i];
        sum += Number.parseInt(char);
        productSum *= Number.parseInt(char);
    }
    var total = sum + productSum;
    return n % total === 0;
}
;
console.log(checkDivisibility(1));
console.log(checkDivisibility(12));
console.log(checkDivisibility(123));
console.log(checkDivisibility(1234));
