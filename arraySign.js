function arraySign(nums) {
    var negatives = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num === 0)
            return 0;
        if (num < 0)
            negatives++;
    }
    return negatives % 2 === 0 ? 1 : -1;
}
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // Output: 1
console.log(arraySign([1, 5, 0, 2, -3])); // Output: 0
