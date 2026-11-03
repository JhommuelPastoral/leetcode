function findErrorNums(nums) {
    nums.sort(function (a, b) { return a - b; });
    var missing = 1;
    for (var i = 0; i < nums.length; i++) {
        if (missing === nums[i] && nums[i] !== nums[i + 1])
            missing++;
        if (nums[i] > missing)
            break;
    }
    var seen = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (seen.has(num))
            return [num, missing];
        seen.add(num);
    }
    return [];
}
;
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
