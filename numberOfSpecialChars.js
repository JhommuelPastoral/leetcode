function numberOfSpecialChars(word) {
    var set = new Set(word);
    var res = 0;
    for (var _i = 0, _a = Array.from(set); _i < _a.length; _i++) {
        var value = _a[_i];
        if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) {
            if (set.has(value.toUpperCase()))
                res++;
        }
    }
    return res;
}
;
console.log(numberOfSpecialChars("aAAbbbb"));
console.log(numberOfSpecialChars("aA"));
console.log(numberOfSpecialChars("aAAbbbBc"));
