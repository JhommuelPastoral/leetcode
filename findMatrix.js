function findMatrix(nums) {
    var res = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var isInserted = false;
        for (var _a = 0, res_1 = res; _a < res_1.length; _a++) {
            var arr = res_1[_a];
            if (!arr.includes(num)) {
                arr.push(num);
                isInserted = true;
                break;
            }
        }
        if (!isInserted)
            res.push([num]);
    }
    return res;
}
;
console.log(findMatrix([4, 3, 4, 3, 5, 4, 2]));
console.log(findMatrix([1, 2, 3]));
console.log(findMatrix([1, 1, 1, 1, 1]));
console.log(findMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
