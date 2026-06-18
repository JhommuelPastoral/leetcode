function findLonely(nums) {
    var _a;
    var adjacentMap = new Map();
    var res = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        adjacentMap.set(num, ((_a = adjacentMap.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(adjacentMap); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (value === 1 && !adjacentMap.has(key + 1) && !adjacentMap.has(key - 1))
            res.push(key);
    }
    return res;
}
;
console.log(findLonely([10, 6, 5, 8])); // [10,8]
console.log(findLonely([1, 3, 5, 3])); // [1,5]
console.log(findLonely([1, 1, 1, 1])); // []
