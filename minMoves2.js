function minMoves2(nums) {
    var seen = new Set();
    var min = Infinity;
    for (var i = 0; i < nums.length; i++) {
        var moves = 0;
        if (seen.has(nums[i]))
            continue;
        seen.add(nums[i]);
        for (var j = 0; j < nums.length; j++) {
            if (j === i)
                continue;
            moves += Math.abs(nums[i] - nums[j]);
        }
        min = Math.min(min, moves);
    }
    return min;
}
;
console.log(minMoves2([1, 2, 3])); // Output: 2
console.log(minMoves2([1, 10, 2, 9])); // Output: 16
console.log(minMoves2([1, 0, 0, 8, 6])); // Output: 14
