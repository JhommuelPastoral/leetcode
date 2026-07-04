function minimumAverageDifference(nums) {
    var min = Infinity;
    var index = 0;
    var leftSum = 0;
    var rightSum = nums.reduce(function (acc, curr) { return acc + curr; }, 0);
    for (var i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        leftSum += nums[i];
        var rightAvg = (nums.length - 1 - i) === 0 ? 0 : Math.floor(rightSum / (nums.length - 1 - i));
        var avg = Math.abs(Math.floor(leftSum / (i + 1)) - rightAvg);
        if (avg < min) {
            min = avg;
            index = i;
        }
    }
    return index;
}
;
console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3])); // Output: 3
console.log(minimumAverageDifference([0])); // Output: 0
