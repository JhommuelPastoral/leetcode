function longestNiceSubarray(nums) {
    var res = 1;
    for (var i = 0; i < nums.length; i++) {
        var count = 1;
        var temp = [nums[i]];
        for (var j = i + 1; j < nums.length; j++) {
            var bitWise = nums[i] & nums[j];
            if (bitWise)
                break;
            var isbitWiseZero = true;
            for (var k = 0; k < temp.length; k++) {
                if ((temp[k] & nums[j])) {
                    isbitWiseZero = false;
                    break;
                }
            }
            if (isbitWiseZero) {
                temp.push(nums[j]);
                res = Math.max(temp.length, res);
            }
            else
                break;
        }
    }
    return res;
}
;
console.log(longestNiceSubarray([1, 3, 8, 48, 10])); // Output: 3
console.log(longestNiceSubarray([3, 1, 5, 11, 13])); // Output: 1
console.log(longestNiceSubarray([1, 2, 3, 4, 5])); // Output: 2
