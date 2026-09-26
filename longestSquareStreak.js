function longestSquareStreak(nums) {
    nums.sort();
    var set = new Set(nums);
    var max = -Infinity;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var counter = 1;
        var square = num * num;
        while (set.has(square)) {
            counter++;
            square = square * square;
        }
        if (counter >= 2)
            max = Math.max(max, counter);
    }
    return max < 0 ? -1 : max;
}
;
console.log(longestSquareStreak([4, 3, 6, 16, 8, 2])); // 3
console.log(longestSquareStreak([2, 3, 5, 6, 7])); // -1
console.log(longestSquareStreak([4, 2, 3, 9, 16])); // 3
