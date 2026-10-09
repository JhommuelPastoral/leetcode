function IsStringEmail(s) {
    var upperCaseCounter = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '@')
            return { isEmail: true, domainIndex: i + 1, name: "".concat(s[0]).concat(s[i - 1]) };
    }
    return { isEmail: false, domainIndex: 0, name: '' };
}
function maskPII(s) {
    var _a = IsStringEmail(s), isEmail = _a.isEmail, domainIndex = _a.domainIndex, name = _a.name;
    if (isEmail) {
        name = name.toLowerCase();
        s = s.toLowerCase();
        var email = "".concat(name[0], "*****").concat(name[1], "@");
        for (var i = domainIndex; i < s.length; i++)
            email += s[i];
        return email;
    }
    else {
        var number = '';
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var ch = s_1[_i];
            if (Number.parseInt(ch) || ch === '0')
                number += ch;
        }
        if (number.length === 10)
            return "***-***-".concat(number[6]).concat(number[7]).concat(number[8]).concat(number[9]);
        else if (number.length === 11)
            return "+*-***-***-".concat(number[7]).concat(number[8]).concat(number[9]).concat(number[10]);
        else if (number.length === 12)
            return "+**-***-***-".concat(number[8]).concat(number[9]).concat(number[10]).concat(number[11]);
        else if (number.length === 13)
            return "+***-***-***-".concat(number[9]).concat(number[10]).concat(number[11]).concat(number[12]);
    }
    return '';
}
;
console.log(maskPII("AB@qq.com"));
console.log(maskPII("1(234)567-890"));
console.log(maskPII("86-(10)12345678"));
