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
var arr = [1, 4, 1, 10, 25, 3, 5, 0, 26];
console.log(maxSumSubArray(arr, 4));
