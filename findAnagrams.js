function findAnagrams(s, p) {
    var _a, _b, _c;
    var res = [];
    var map = new Map();
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var char = p_1[_i];
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var tempMap = new Map();
    for (var i = 0; i < p.length; i++) {
        tempMap.set(s[i], ((_b = tempMap.get(s[i])) !== null && _b !== void 0 ? _b : 0) + 1);
    }
    var isSame = function () {
        if (tempMap.size !== map.size)
            return false;
        for (var _i = 0, _a = Array.from(map); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (tempMap.get(key) !== value)
                return false;
        }
        return true;
    };
    if (isSame())
        res.push(0);
    for (var i = p.length; i < s.length; i++) {
        var left = s[i - p.length];
        var right = s[i];
        tempMap.set(left, tempMap.get(left) - 1);
        if (tempMap.get(left) === 0) {
            tempMap.delete(left);
        }
        tempMap.set(right, ((_c = tempMap.get(right)) !== null && _c !== void 0 ? _c : 0) + 1);
        if (isSame()) {
            res.push(i - p.length + 1);
        }
    }
    return res;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("af", "be"));
