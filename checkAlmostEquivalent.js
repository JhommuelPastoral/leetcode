function checkAlmostEquivalent(word1, word2) {
    var _a, _b;
    var map = new Map();
    for (var i = 0; i < word1.length; i++) {
        map.set(word1[i], ((_a = map.get(word1[i])) !== null && _a !== void 0 ? _a : 0) + 1);
        map.set(word2[i], ((_b = map.get(word2[i])) !== null && _b !== void 0 ? _b : 0) - 1);
    }
    for (var _i = 0, _c = Array.from(map.values()); _i < _c.length; _i++) {
        var diff = _c[_i];
        if (Math.abs(diff) > 3)
            return false;
    }
    return true;
}
console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
console.log(checkAlmostEquivalent("cccddabba", "babababab"));
