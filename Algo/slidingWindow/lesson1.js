function maxSumSubArray(nums, k) {
    var sum = 0;
    for (var i = 0; i <= nums.length - k; i++) {
        var temp = 0;
        for (var j = i; j < i + k; j++) {
            temp += nums[j];
        }
        if (temp > sum)
            sum = temp;
    }
    return sum;
}
;
function maxSumSubArrayOptimized(nums, k) {
    var window = nums.slice(0, k).reduce(function (a, b) { return a + b; }, 0);
    var max = window;
    for (var i = k; i < nums.length; i++) {
        window += nums[i];
        window -= nums[i - k];
        max = Math.max(max, window);
    }
    return max;
}
var arr = [1, 4, 1, 10, 25, 3, 5, 0, 26];
console.log(maxSumSubArray(arr, 4));
console.log(maxSumSubArrayOptimized(arr, 4));
