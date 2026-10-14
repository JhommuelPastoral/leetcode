function findLucky(arr) {
    var _a;
    var map = new Map();
    var max = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(map); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (key === value && key > max)
            max = key;
    }
    return max === 0 ? -1 : max;
}
;
console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 3, 4]));
console.log(findLucky([2, 2, 2, 3, 3]));
console.log(findLucky([5]));
