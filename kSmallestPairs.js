function kSmallestPairs(nums1, nums2, k) {
    var pairs = [];
    var res = [];
    for (var _i = 0, nums1_1 = nums1; _i < nums1_1.length; _i++) {
        var num1 = nums1_1[_i];
        for (var _a = 0, nums2_1 = nums2; _a < nums2_1.length; _a++) {
            var num2 = nums2_1[_a];
            pairs.push([num1, num2, num1 + num2]);
        }
    }
    // pairs.sort((a:number[], b:number[]) => a[0] - b[0] || a[1] - b[1])
    pairs.sort(function (a, b) { return a[2] - b[2]; });
    return pairs.slice(0, k).map(function (val) { return [val[0], val[1]]; });
}
;
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
console.log(kSmallestPairs([1, 2], [3], 3));
