function splitWordsBySeparator(words, separator) {
    var res = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var separated = word.split(separator).filter(function (val) { return val.length >= 1; });
        res.push(separated);
    }
    return res.flat();
}
;
console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
