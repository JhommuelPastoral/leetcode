function findDifference(nums1, nums2) {
    var _a = [new Set(nums1), new Set(nums2)], set1 = _a[0], set2 = _a[1];
    return [
        Array.from(set1).filter(function (num) { return !set2.delete(num); }),
        Array.from(set2)
    ];
}
console.log(findDifference([1, 2, 3], [2, 4, 6]));
