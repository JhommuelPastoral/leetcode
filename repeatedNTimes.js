function repeatedNTimes(nums) {
    var _a;
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var max = Math.max.apply(Math, Array.from(map.values()));
    for (var _b = 0, _c = Array.from(map); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (value === max)
            return key;
    }
    return 0;
}
;
console.log(repeatedNTimes([1, 2, 3, 3]));
