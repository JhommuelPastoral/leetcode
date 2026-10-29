function reduce(nums, fn, init) {
    var val = init;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        val = fn(val, num);
    }
    return val;
}
;
console.log(reduce([1, 2, 3, 4], function (accums, curr) { return accums + curr; }, 0));
console.log(reduce([1, 2, 3, 4], function (accum, curr) { return accum * curr; }, 1));
console.log(reduce([1, 2, 3, 4], function (accum, curr) { return Math.max(accum, curr); }, -Infinity));
