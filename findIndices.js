function findIndices(nums, indexDifference, valueDifference) {
    var minIdx = 0;
    var maxIdx = 0;
    for (var i = indexDifference; i < nums.length; i++) {
        var j = i - indexDifference;
        // Track the minimum and maximum eligible values
        if (nums[j] < nums[minIdx])
            minIdx = j;
        if (nums[j] > nums[maxIdx])
            maxIdx = j;
        // Check maximum difference
        if (Math.abs(nums[i] - nums[minIdx]) >= valueDifference) {
            return [minIdx, i];
        }
        if (Math.abs(nums[i] - nums[maxIdx]) >= valueDifference) {
            return [maxIdx, i];
        }
    }
    return [-1, -1];
}
console.log(findIndices([1, 2, 3, 4, 5], 2, 3)); // Output: [0, 3]
console.log(findIndices([1, 2, 3, 4, 5], 1, 4)); // Output: [0, 4]
