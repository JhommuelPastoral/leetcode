"use strict";
function findDifference(nums1, nums2) {
    const [set1, set2] = [new Set(nums1), new Set(nums2)];
    return [
        Array.from(set1).filter(num => !set2.delete(num)),
        Array.from(set2)
    ];
}
console.log(findDifference([1, 2, 3], [2, 4, 6]));
