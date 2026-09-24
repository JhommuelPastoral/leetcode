function numberOfPairs(nums1, nums2, k) {
    var res = 0;
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1[i] % (nums2[j] * k) === 0)
                res++;
        }
    }
    return res;
}
;
console.log(numberOfPairs([1, 2, 3, 4], [1, 2], 1)); // Output: 5
console.log(numberOfPairs([1, 2, 3], [4, 5, 6], 2)); // Output: 0
console.log(numberOfPairs([1, 2, 3], [1, 2, 3], 1)); // Output: 9
