function findScore(nums) {
    var pairs = nums.map(function (num, idx) { return [num, idx]; });
    pairs.sort(function (a, b) {
        if (a[0] !== b[0])
            return a[0] - b[0];
        return a[1] - b[1];
    });
    console.log(pairs);
    var marked = new Array(nums.length).fill(false);
    var score = 0;
    for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
        var _a = pairs_1[_i], value = _a[0], idx = _a[1];
        if (marked[idx])
            continue;
        score += value;
        marked[idx] = true;
        if (idx > 0)
            marked[idx - 1] = true;
        if (idx < nums.length - 1)
            marked[idx + 1] = true;
    }
    return score;
}
console.log(findScore([2, 1, 3, 4, 5])); // 9
console.log(findScore([2, 3, 5, 1, 3, 2])); // 6
