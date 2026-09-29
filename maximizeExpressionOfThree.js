function maximizeExpressionOfThree(nums) {
    nums.sort(function (a, b) { return b - a; });
    return nums[0] + nums[1] - nums[nums.length - 1];
}
;
console.log(maximizeExpressionOfThree([1, 2, 3])); // Output: 4
console.log(maximizeExpressionOfThree([1, 2, 3, 4])); // Output: 5
