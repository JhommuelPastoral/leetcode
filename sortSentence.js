function sortSentence(s) {
    var arr = new Array();
    for (var _i = 0, _a = s.split(' '); _i < _a.length; _i++) {
        var word = _a[_i];
        var digit = Number.parseInt(word[word.length - 1]);
        arr[digit - 1] = "".concat(word.slice(0, word.length - 1));
    }
    return arr.join(' ');
}
;
console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
