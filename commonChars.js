function commonChars(words) {
    var _a;
    var maps = [];
    var commonChar = new Set();
    var res = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var map = new Map();
        for (var _b = 0, word_1 = word; _b < word_1.length; _b++) {
            var ch = word_1[_b];
            map.set(ch, ((_a = map.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
        }
        maps.push(map);
    }
    var firstWord = Array.from(maps[0].keys());
    for (var i = 0; i < firstWord.length; i++) {
        var char = firstWord[i];
        var isCommon = true;
        for (var j = 1; j < maps.length; j++) {
            if (!maps[j].has(char)) {
                isCommon = false;
                break;
            }
        }
        if (isCommon)
            commonChar.add(char);
    }
    for (var _c = 0, _d = Array.from(commonChar); _c < _d.length; _c++) {
        var commonCh = _d[_c];
        var min = Infinity;
        for (var i = 0; i < words.length; i++) {
            min = Math.min(min, maps[i].get(commonCh));
        }
        while (min !== 0) {
            res.push(commonCh);
            min--;
        }
    }
    return res;
}
;
console.log(commonChars(["bella", "label", "roller"])); // Output: ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // Output: ["c","o"]
console.log(commonChars(["abc", "def", "ghi"])); // Output: []
