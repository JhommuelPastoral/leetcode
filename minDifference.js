function minDifference(nums, queries) {
    var result = [];
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var _a = queries_1[_i], start = _a[0], end = _a[1];
        var subArr = Array.from(new Set(nums.slice(start, end + 1))).sort(function (a, b) { return a - b; });
        if (subArr.length === 1) {
            result.push(-1);
            continue;
        }
        var min = Infinity;
        for (var i = 0; i < subArr.length - 1; i++) {
            min = Math.min(min, Math.abs(subArr[i] - subArr[i + 1]));
            if (min === 1)
                break;
        }
        result.push(min);
    }
    return result;
}
;
console.log(minDifference([1, 3, 4, 8], [[0, 1], [1, 2], [2, 3], [0, 3]])); // Output: [2,1,4,1]
console.log(minDifference([4, 3, 2, 4], [[0, 1], [1, 2], [2, 3], [0, 3]]));
