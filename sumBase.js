function sumBase(n, k) {
    var str = n.toString(k);
    var sum = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var ch = str_1[_i];
        sum += parseInt(ch);
    }
    return sum;
}
;
console.log(sumBase(34, 6));
