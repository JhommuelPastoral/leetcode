function maxDigitRange(nums) {
    var range = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var max = -Infinity;
        var min = Infinity;
        var str = num.toString();
        for (var i = 0; i < str.length; i++) {
            max = Math.max(max, Number.parseInt(str[i]));
            min = Math.min(min, Number.parseInt(str[i]));
        }
        range.push(max - min);
    }
    var maxRange = Math.max.apply(Math, range);
    var sum = 0;
    for (var i = 0; i < range.length; i++) {
        if (range[i] === maxRange)
            sum += nums[i];
    }
    return sum;
}
;
console.log(maxDigitRange([123, 456, 789])); // 1368
console.log(maxDigitRange([111, 222, 333])); // 0
