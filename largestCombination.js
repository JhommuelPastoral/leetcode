function backTrack(candidates, subset, index, sum, size) {
    if (index === candidates.length) {
        if (subset.length > 0 && sum > 0) {
            size = Math.max(size, subset.length);
        }
        return size;
    }
    // Include
    subset.push(candidates[index]);
    var prevSum = sum;
    sum &= candidates[index];
    size = backTrack(candidates, subset, index + 1, sum, size);
    // Exclude
    subset.pop();
    sum = prevSum;
    size = backTrack(candidates, subset, index + 1, sum, size);
    return size;
}
function largestCombination(candidates) {
    var size = backTrack(candidates, [], 0, -1, 0);
    return size;
}
;
console.log(largestCombination([1, 2, 3, 4]));
console.log(largestCombination([2, 4, 8, 16]));
console.log(largestCombination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]));
