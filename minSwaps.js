function minSwaps(nums) {
    var _a;
    var res = 0;
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var sum = 0;
        var temp = num;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        map.set(num, sum);
    }
    var sorted = Array.from(map.entries()).sort(function (a, b) { return a[1] - b[1] || a[0] - b[0]; });
    var pos = new Map();
    for (var i = 0; i < nums.length; i++) {
        pos.set(nums[i], i);
    }
    for (var i = 0; i < nums.length; i++) {
        var target = sorted[i][0];
        if (nums[i] === target)
            continue;
        var j = pos.get(target);
        _a = [nums[j], nums[i]], nums[i] = _a[0], nums[j] = _a[1];
        pos.set(nums[j], j);
        pos.set(nums[i], i);
        res++;
    }
    return res;
}
console.log(minSwaps([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]));
console.log(minSwaps([1, 3, 5, 2, 4, 6, 7]));
