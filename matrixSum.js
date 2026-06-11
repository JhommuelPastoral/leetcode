function matrixSum(nums) {
    var sum = 0;
    for (var i = 0; i < nums[0].length; i++) {
        var max = 0;
        for (var j = 0; j < nums.length; j++) {
            var row = nums[j];
            var tempMax = Math.max.apply(Math, row);
            for (var k = 0; k < row.length; k++) {
                if (nums[j][k] === tempMax) {
                    nums[j][k] = -1;
                    break;
                }
            }
            max = Math.max(tempMax, max);
        }
        sum += max;
    }
    return sum;
}
;
console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(matrixSum([[1, 2, 4], [3, 3, 1]]));
console.log(matrixSum([[10]]));
