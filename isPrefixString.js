function isPrefixString(s, words) {
    var index = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        for (var i = 0; i < word.length; i++) {
            if (s[index] === word[i])
                index++;
            else
                return false;
        }
        if (index === s.length)
            return true;
    }
    return false;
}
;
console.log(isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]));
console.log(isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"]));
