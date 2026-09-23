function differenceOfSum(nums) {
    var elementSum = 0;
    var digitSum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        elementSum += num;
        while (num > 0) {
            var digit = num % 10;
            num = Math.floor(num / 10);
            digitSum += digit;
        }
    }
    return Math.abs(elementSum - digitSum);
}
;
console.log(differenceOfSum([1, 15, 6, 3])); // Output: 9
console.log(differenceOfSum([1, 2, 3, 4])); // Output: 0
