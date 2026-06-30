function countCharacters(words, chars) {
    var _a;
    var map = new Map();
    var sum = 0;
    for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
        var char = chars_1[_i];
        map.set((char), ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, words_1 = words; _b < words_1.length; _b++) {
        var word = words_1[_b];
        var temp = new Map(map);
        var isGoodString = true;
        for (var _c = 0, word_1 = word; _c < word_1.length; _c++) {
            var char = word_1[_c];
            if (temp.get(char))
                temp.set(char, (temp.get(char) - 1));
            else {
                isGoodString = false;
                break;
            }
        }
        if (isGoodString)
            sum += word.length;
    }
    return sum;
}
;
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
