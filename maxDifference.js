function maxDifference(s) {
    var _a;
    var freq = new Map();
    var maxOdd = -Infinity;
    var minEven = Infinity;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        freq.set(ch, ((_a = freq.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(freq); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (value % 2 === 0 && value < minEven)
            minEven = value;
        if (value % 2 !== 0 && value > maxOdd)
            maxOdd = value;
    }
    return maxOdd - minEven;
}
;
console.log(maxDifference("aaabbbcc")); // 1
console.log(maxDifference("aabbcc")); // 0
console.log(maxDifference("abcde")); // 1
