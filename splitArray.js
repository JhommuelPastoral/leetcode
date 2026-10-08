function checkIsRightDecreasing(arr, left) {
    for (var i = left; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1])
            continue;
        else
            return false;
    }
    return true;
}
function splitArray(nums) {
    var _a;
    var left = 0;
    var leftArr = [nums[0]];
    var rightArr = [];
    var leftSum = nums[0];
    var rightSum = 0;
    var ans = Infinity;
    for (var i = 1; i < nums.length; i++) {
        rightSum += nums[i];
        rightArr.push(nums[i]);
    }
    var isIncreasing = false;
    while (rightArr.length > 0) {
        var isLeftIncreasing = leftArr[leftArr.length - 1] > ((_a = leftArr[leftArr.length - 2]) !== null && _a !== void 0 ? _a : -Infinity);
        var isRightDecreasing = false;
        if (!isIncreasing)
            isRightDecreasing = checkIsRightDecreasing(rightArr, left);
        else
            isRightDecreasing = true;
        if (isLeftIncreasing && !isRightDecreasing) {
            var shift = rightArr[left];
            leftArr.push(shift);
            leftSum += shift;
            rightSum -= shift;
            left++;
        }
        else if (!isLeftIncreasing && isRightDecreasing)
            break;
        else if (isLeftIncreasing && isRightDecreasing) {
            ans = Math.min(Math.abs(leftSum - rightSum), ans);
            var shift = rightArr[left];
            leftArr.push(shift);
            leftSum += shift;
            isIncreasing = true;
            rightSum -= shift;
            left++;
        }
        else
            break;
    }
    return ans === Infinity ? -1 : ans;
}
;
console.log(splitArray([1, 3, 2, 1])); // Output: 1
console.log(splitArray([1, 2, 3, 4, 5])); // Output: -1
console.log(splitArray([5, 4, 3, 2, 1])); // Output: -1
