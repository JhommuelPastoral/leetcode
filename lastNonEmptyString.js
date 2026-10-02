function lastNonEmptyString(s) {
    var _a;
    var map = new Map();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var max = Math.max.apply(Math, Array.from(map.values()));
    var res = '';
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (map.get(char) === max) {
            if (s.lastIndexOf(char) === i) {
                res += char;
            }
        }
    }
    return res;
}
console.log(lastNonEmptyString('abca')); // Output: 'a'
console.log(lastNonEmptyString('abcb')); // Output: 'b'
console.log(lastNonEmptyString('abcabc')); // Output: 'c'
