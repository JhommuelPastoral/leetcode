function uncommonFromSentences(s1, s2) {
    var _a, _b;
    var map1 = new Map();
    var map2 = new Map();
    var res = [];
    for (var _i = 0, _c = s1.split(' '); _i < _c.length; _i++) {
        var word = _c[_i];
        map1.set(word, ((_a = map1.get(word)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _d = 0, _e = s2.split(' '); _d < _e.length; _d++) {
        var word = _e[_d];
        map2.set(word, ((_b = map2.get(word)) !== null && _b !== void 0 ? _b : 0) + 1);
    }
    for (var _f = 0, _g = Array.from(map1); _f < _g.length; _f++) {
        var _h = _g[_f], key = _h[0], value = _h[1];
        if (value === 1) {
            if (!map2.has(key))
                res.push(key);
        }
    }
    for (var _j = 0, _k = Array.from(map2); _j < _k.length; _j++) {
        var _l = _k[_j], key = _l[0], value = _l[1];
        if (value === 1) {
            if (!map1.has(key))
                res.push(key);
        }
    }
    return res;
}
;
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]
