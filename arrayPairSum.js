function arrayPairSum(nums) {
    var max = 0;
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length - 1; i += 2)
        max += Math.min(nums[i], nums[i + 1]);
    return max;
}
;
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
console.log(arrayPairSum([1, 4, 2, 56, 1, 2]));
