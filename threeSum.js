function threeSum(nums) {
    var res = [];
    var seen = new Set();
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                var sum = nums[i] + nums[j] + nums[k];
                var triplet = [nums[i], nums[j], nums[k]].sort(function (a, b) { return a - b; }).join(',');
                if (sum === 0 && !seen.has(triplet)) {
                    res.push([nums[i], nums[j], nums[k]]);
                    seen.add(triplet);
                }
            }
        }
    }
    return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
