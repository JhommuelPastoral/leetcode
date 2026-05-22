function sumOfEncryptedInt(nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var strNum = num.toString().split('');
        var arrNum = strNum.map(function (str) { return parseInt(str); });
        var max = Math.max.apply(Math, arrNum);
        var encrypt = parseInt(new Array(strNum.length).fill(max).join(''));
        sum += encrypt;
    }
    return sum;
}
;
console.log(sumOfEncryptedInt([4, 1, 2, 6]));
