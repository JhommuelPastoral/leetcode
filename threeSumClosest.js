function threeSumClosest(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var closest = nums[0] + nums[1] + nums[2];
    for (var i = 0; i < nums.length - 2; i++) {
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var triplet = nums[i] + nums[left] + nums[right];
            if (Math.abs(triplet - target) < Math.abs(closest - target))
                closest = triplet;
            if (triplet > target)
                right--;
            else if (triplet < target)
                left++;
            else
                return target;
        }
    }
    return closest;
}
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
