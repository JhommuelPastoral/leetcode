function sumAndMultiply(n) {
    var noneZero = '';
    var sum = 0;
    for (var _i = 0, _a = n.toString(); _i < _a.length; _i++) {
        var num = _a[_i];
        if (num !== '0') {
            noneZero += num.toString();
            sum += Number.parseInt(num);
        }
    }
    return Number.isInteger(Number.parseInt(noneZero)) ? Number.parseInt(noneZero) * sum : 0;
}
;
console.log(sumAndMultiply(123)); // 36
console.log(sumAndMultiply(999)); // 729
