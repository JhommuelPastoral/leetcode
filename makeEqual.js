function makeEqual(words) {
    var _a;
    if (words.length === 1)
        return true;
    var map = new Map();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        for (var _b = 0, word_1 = word; _b < word_1.length; _b++) {
            var ch = word_1[_b];
            map.set(ch, ((_a = map.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
        }
    }
    for (var _c = 0, _d = Array.from(map); _c < _d.length; _c++) {
        var _e = _d[_c], key = _e[0], value = _e[1];
        if (value % words.length !== 0)
            return false;
    }
    return true;
}
;
console.log(makeEqual(["abc", "aabc", "bc"])); // Output: true
console.log(makeEqual(["ab", "a"])); // Output: false
console.log(makeEqual(["abc", "def", "ghi"])); // Output: false
console.log(makeEqual(["a", "a", "a"])); // Output: true
