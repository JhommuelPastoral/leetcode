function minStartValue(nums) {
    var min = Infinity;
    var startValue = 1;
    while (min === Infinity) {
        var sum = startValue;
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var num = nums_1[_i];
            sum += num;
            if (sum < 1)
                break;
        }
        if (sum >= 1)
            return startValue;
        startValue++;
    }
    return startValue;
}
;
console.log(minStartValue([-3, 2, -3, 4, 2])); // Output: 5
console.log(minStartValue([1, 2])); // Output: 1
