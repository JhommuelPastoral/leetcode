function secondHighest(s) {
    var max = -1;
    var secondMax = -1;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        if (Number.parseInt(ch) || ch === '0') {
            if (Number.parseInt(ch) > max) {
                secondMax = max;
                max = Number.parseInt(ch);
            }
            if (Number.parseInt(ch) > secondMax && Number.parseInt(ch) < max)
                secondMax = Number.parseInt(ch);
        }
    }
    return secondMax;
}
;
console.log(secondHighest('abc111'));
console.log(secondHighest('abc1111'));
console.log(secondHighest('abc'));
