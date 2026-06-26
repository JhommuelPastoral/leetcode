function xorQueries(arr, queries) {
    var res = [];
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var _a = queries_1[_i], left = _a[0], right = _a[1];
        var sum = 0;
        while (left <= right) {
            sum ^= arr[left];
            left++;
        }
        res.push(sum);
    }
    return res;
}
;
console.log(xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]));
console.log(xorQueries([4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]));
