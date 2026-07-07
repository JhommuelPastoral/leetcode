function maxFreqSum(s) {
    var _a;
    var map = new Map();
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var maxVowel = 0;
    var maxConsonant = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(map); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (vowels.has(key) && value > maxVowel)
            maxVowel = value;
        else if (value > maxConsonant && !vowels.has(key))
            maxConsonant = value;
    }
    return maxConsonant + maxVowel;
}
;
console.log(maxFreqSum("abca")); // Output: 3
console.log(maxFreqSum("abcde")); // Output: 2
