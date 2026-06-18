function majorityElement(nums) {
    var _a;
    var size = nums.length / 3;
    var res = [];
    var map = new Map();
    var seen = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
        if (map.get(num) > size && !seen.has(num)) {
            res.push(num);
            seen.add(num);
        }
    }
    return res;
}
;
console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])); // [1,2]
console.log(majorityElement([1, 2])); // [1,2]
