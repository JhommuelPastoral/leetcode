function repeatedCharacter(s) {
    var _a;
    var map = new Map();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        map.set(ch, ((_a = map.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
        if (map.get(ch) === 2)
            return ch;
    }
    return '';
}
;
console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
console.log(repeatedCharacter("abcde"));
