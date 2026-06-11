function selfDividingNumbers(left, right) {
    var res = [];
    for (var i = left; i <= right; i++) {
        var digits = i.toString().split('');
        var isSelfDriving = true;
        for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
            var digit = digits_1[_i];
            if (i % Number.parseInt(digit) !== 0) {
                isSelfDriving = false;
                break;
            }
        }
        if (isSelfDriving)
            res.push(i);
    }
    return res;
}
;
console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));
console.log(selfDividingNumbers(1, 10000));
