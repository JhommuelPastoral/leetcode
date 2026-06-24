"use strict";
function mergeArrays(nums1, nums2) {
    const map2 = new Map();
    const map1 = new Map();
    let res = [];
    for (const [id, value] of nums2)
        map2.set(id, value);
    for (const [id, value] of nums1)
        map1.set(id, value);
    for (const [id, value] of nums1) {
        if (map2.has(id))
            res.push([id, value + map2.get(id)]);
        else
            res.push([id, value]);
    }
    for (const [id, value] of nums2) {
        if (!map1.has(id))
            res.push([id, value]);
    }
    res.sort((a, b) => a[0] - b[0]);
    return res;
}
;
console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]));
console.log(mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]));
