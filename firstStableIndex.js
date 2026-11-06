function firstStableIndex(nums, k) {
    var max = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        var min = Math.min.apply(Math, nums.slice(i, nums.length));
        if (max - min <= k)
            return i;
    }
    return -1;
}
;
console.log(firstStableIndex([1, 2, 3, 4, 5], 3));
console.log(firstStableIndex([1, 2, 3, 4, 5], 1));
console.log(firstStableIndex([1, 2, 3, 4, 5], 0));
