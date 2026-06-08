function subarraySum(nums) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        var start = Math.max(0, i - nums[i]);
        for (var j = start; j <= i; j++)
            res += nums[j];
    }
    return res;
}
;
console.log(subarraySum([1, 2, 3]));
console.log(subarraySum([1, 1, 1]));
console.log(subarraySum([1, 2, 3, 4, 5]));
