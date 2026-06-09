function isHappy(n) {
    var seen = new Set();
    var num = n;
    while (true) {
        var sum = 0;
        for (var _i = 0, _a = num.toString(); _i < _a.length; _i++) {
            var d = _a[_i];
            sum += Math.pow(Number(d), 2);
        }
        if (sum === 1)
            return true;
        if (seen.has(sum))
            return false;
        seen.add(sum);
        num = sum;
    }
    return true;
}
;
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(1));
