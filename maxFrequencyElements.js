function maxFrequencyElements(nums) {
    var _a;
    var map = new Map();
    var max = 0;
    var res = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
        max = Math.max(map.get(num), max);
    }
    for (var _b = 0, _c = Array.from(map); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (value === max)
            res += max;
    }
    return res;
}
;
console.log(maxFrequencyElements([1, 2, 3, 1, 2, 3, 3]));
console.log(maxFrequencyElements([1, 1, 1, 2, 2, 3]));
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
