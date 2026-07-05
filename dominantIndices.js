function dominantIndices(nums) {
    var res = 0;
    var sum = nums.reduce(function (acc, curr) { return acc + curr; }, 0) - nums[0];
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] > (sum / (nums.length - 1 - i)))
            res++;
        sum -= nums[i + 1];
    }
    return res;
}
;
console.log(dominantIndices([3, 6, 1, 0])); // Output: 3
console.log(dominantIndices([1, 2, 3, 4])); // Output: 0
