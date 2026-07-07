function replaceDigits(s) {
    var res = '';
    for (var i = 0; i < s.length; i += 2) {
        if (s[i] && Number.isInteger(Number.parseInt(s[i + 1]))) {
            var str = s[i] + String.fromCharCode(s.charCodeAt(i) + Number.parseInt(s[i + 1]));
            res += str;
        }
        else
            res += s[i];
    }
    return res;
}
;
console.log(replaceDigits("a1c1e1")); // "abcdef"
console.log(replaceDigits("a1b2c3d4e")); // "abbdcfdhe"
