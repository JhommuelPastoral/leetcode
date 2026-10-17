function topKFrequent(nums, k) {
    var _a;
    var freq = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        freq.set(num, ((_a = freq.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var sorted = Array.from(freq).sort(function (a, b) { return b[1] - a[1]; }).map(function (val) { return val[0]; });
    return sorted.slice(0, k);
}
;
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 3));
