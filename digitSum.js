function digitSum(s, k) {
    while (s.length > k) {
        var temp = 0;
        var str = '';
        var tempStr = '';
        for (var i = 0; i < s.length; i++) {
            if ((i + 1) % k === 0) {
                temp += Number.parseInt(s[i]);
                str += temp.toString();
                temp = 0;
                tempStr = '';
            }
            else {
                temp += Number.parseInt(s[i]);
                tempStr += s[i];
            }
        }
        if (tempStr)
            s = str + temp.toString();
        else
            s = str;
    }
    return s;
}
;
console.log(digitSum('11111222223', 3));
console.log(digitSum('123456789', 3));
console.log(digitSum('00000000', 3));
