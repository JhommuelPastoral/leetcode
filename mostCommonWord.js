function mostCommonWord(paragraph, banned) {
    var _a;
    var freq = new Map();
    var bannedWords = new Set(banned);
    var max = 0;
    var str = '';
    var res = '';
    paragraph = paragraph.toLowerCase();
    for (var _i = 0, paragraph_1 = paragraph; _i < paragraph_1.length; _i++) {
        var ch = paragraph_1[_i];
        if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)
            str += ch;
        else {
            freq.set(str, ((_a = freq.get(str)) !== null && _a !== void 0 ? _a : 0) + 1);
            if (freq.get(str) > max && !bannedWords.has(str) && str.length) {
                max = freq.get(str);
                res = str;
            }
            str = '';
        }
    }
    if (str && ((freq.get(str) + 1) || 1) > max && !bannedWords.has(str))
        res = str;
    return res;
}
;
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
