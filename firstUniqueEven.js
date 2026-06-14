function firstUniqueEven(nums) {
    var _a;
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num % 2 === 0)
            map.set(num, ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, nums_2 = nums; _b < nums_2.length; _b++) {
        var num = nums_2[_b];
        if (map.get(num) === 1)
            return num;
    }
    return -1;
}
;
console.log(firstUniqueEven([1, 2, 3, 4, 2, 1]));
console.log(firstUniqueEven([1, 3, 5, 7]));
