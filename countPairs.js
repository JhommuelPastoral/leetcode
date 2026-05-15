function countPairs(nums, k) {
    var pairs = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i >= j)
                continue;
            if (nums[i] === nums[j] && (i * j) % k === 0)
                pairs++;
        }
    }
    return pairs;
}
;
console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
