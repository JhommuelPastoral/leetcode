function numSubarraysWithSum(nums, goal) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        var sum = nums[i];
        if (sum === goal)
            res++;
        for (var j = i + 1; j < nums.length; j++) {
            if (sum <= goal) {
                sum += nums[j];
                if (sum === goal)
                    res++;
            }
            else
                break;
        }
    }
    return res;
}
;
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
console.log(numSubarraysWithSum([1, 1, 1, 1, 1], 3));
