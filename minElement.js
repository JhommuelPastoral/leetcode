function minElement(nums) {
    var res = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var str = num.toString().split('');
        var sum = str.reduce(function (acc, cur) { return acc + parseInt(cur); }, 0);
        res.push(sum);
    }
    return Math.min.apply(Math, res);
}
;
console.log(minElement([1, 10, 100]));
