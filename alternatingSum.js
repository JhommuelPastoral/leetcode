function alternatingSum(nums) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 === 0)
            res += nums[i];
        else
            res -= nums[i];
    }
    return res;
}
;
console.log(alternatingSum([1, 2, 3, 4]));
console.log(alternatingSum([1, 2, 3, 4, 5]));
