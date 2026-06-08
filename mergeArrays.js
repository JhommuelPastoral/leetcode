function mergeArrays(nums1, nums2) {
    var map2 = new Map();
    var map1 = new Map();
    var res = [];
    for (var _i = 0, nums2_1 = nums2; _i < nums2_1.length; _i++) {
        var _a = nums2_1[_i], id = _a[0], value = _a[1];
        map2.set(id, value);
    }
    for (var _b = 0, nums1_1 = nums1; _b < nums1_1.length; _b++) {
        var _c = nums1_1[_b], id = _c[0], value = _c[1];
        map1.set(id, value);
    }
    for (var _d = 0, nums1_2 = nums1; _d < nums1_2.length; _d++) {
        var _e = nums1_2[_d], id = _e[0], value = _e[1];
        if (map2.has(id))
            res.push([id, value + map2.get(id)]);
        else
            res.push([id, value]);
    }
    for (var _f = 0, nums2_2 = nums2; _f < nums2_2.length; _f++) {
        var _g = nums2_2[_f], id = _g[0], value = _g[1];
        if (!map1.has(id))
            res.push([id, value]);
    }
    res.sort(function (a, b) { return a[0] - b[0]; });
    return res;
}
;
console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]));
console.log(mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]));
