function minimumAverage(nums) {
    nums.sort(function (a, b) { return a - b; });
    var minAvg = Infinity;
    while (nums.length > 0) {
        var min = nums.shift();
        var max = nums.pop();
        minAvg = Math.min(minAvg, (min + max) / 2);
    }
    return minAvg;
}
;
console.log(minimumAverage([1, 3, 5]));
console.log(minimumAverage([6, 2, 7, 5, 1, 2, 0, 3]));
