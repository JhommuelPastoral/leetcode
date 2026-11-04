function findMiddleIndex(nums) {
    var totalSum = nums.reduce(function (a, b) { return a + b; }, 0);
    var leftSum = 0;
    for (var i = 0; i < nums.length; i++) {
        var rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}
console.log(findMiddleIndex([1, 7, 3, 6, 5, 6]));
console.log(findMiddleIndex([1, 2, 3]));
console.log(findMiddleIndex([2, 1, -1]));
