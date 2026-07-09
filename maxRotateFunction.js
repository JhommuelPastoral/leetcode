function maxRotateFunction(nums) {
    var max = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        var temp = 0;
        for (var j = 0; j < nums.length; j++) {
            temp += (j * nums.at(j - i));
        }
        max = Math.max(max, temp);
    }
    return max;
}
;
console.log(maxRotateFunction([4, 3, 2, 6])); // 26
console.log(maxRotateFunction([100])); // 0
console.log(maxRotateFunction([1, 2, 3, 4])); // 10
console.log(maxRotateFunction([2, 1, 2, 4, 2, 2])); // 16
