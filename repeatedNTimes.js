"use strict";
function repeatedNTimes(nums) {
    var _a;
    const map = new Map();
    for (const num of nums)
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    const max = Math.max(...Array.from(map.values()));
    for (const [key, value] of Array.from(map))
        if (value === max)
            return key;
    return 0;
}
;
console.log(repeatedNTimes([1, 2, 3, 3]));
