function maximumSum(nums) {
    var max = -1;
    var sumArr = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var str = num.toString();
        var sum = 0;
        if (str.length === 1)
            sum = num;
        else {
            for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
                var digit = str_1[_a];
                sum += Number.parseInt(digit);
            }
        }
        sumArr.push(sum);
    }
    console.log(sumArr);
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i === j)
                continue;
            if (sumArr[i] === sumArr[j])
                max = Math.max(max, nums[i] + nums[j]);
        }
    }
    return max;
}
;
console.log(maximumSum([51, 71, 17, 42])); // 93
console.log(maximumSum([1, 2, 3, 4, 5, 6])); // 21
