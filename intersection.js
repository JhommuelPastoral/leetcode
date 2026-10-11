function intersection(nums) {
    var arrSet = [];
    var res = [];
    for (var i = 1; i < nums.length; i++)
        arrSet.push(new Set(nums[i]));
    for (var _i = 0, _a = nums[0]; _i < _a.length; _i++) {
        var num = _a[_i];
        var isPresent = true;
        for (var _b = 0, arrSet_1 = arrSet; _b < arrSet_1.length; _b++) {
            var set = arrSet_1[_b];
            if (!set.has(num)) {
                isPresent = false;
                break;
            }
        }
        if (isPresent)
            res.push(num);
    }
    res.sort(function (a, b) { return a - b; });
    return res;
}
;
console.log(intersection([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(intersection([[1, 2, 3], [2, 3, 4], [3, 4, 5]]));
console.log(intersection([[1, 2, 3], [4, 5, 6]]));
