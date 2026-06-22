function minOperations(nums, k) {
    var set = new Set();
    for (var i = 1; i <= k; i++)
        set.add(i);
    var res = 0;
    while (nums.length > 0 && set.size > 0) {
        var pop = nums.pop();
        if (set.has(pop))
            set.delete(pop);
        res++;
    }
    return res;
}
;
console.log(minOperations([1, 2, 3, 4, 5], 5));
console.log(minOperations([3, 1, 3, 4, 3], 6));
