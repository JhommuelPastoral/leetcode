function minOperations1(nums, queries) {
    var res = [];
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var query = queries_1[_i];
        var sum = 0;
        for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
            var num = nums_1[_a];
            sum += Math.abs(query - num);
        }
        res.push(sum);
    }
    return res;
}
;
console.log(minOperations1([1, 4, 6, 8, 10], [3, 5, 7])); // Output: [20, 14, 16]
console.log(minOperations1([2, 5, 9], [1, 3, 6])); // Output: [15, 11, 9]
