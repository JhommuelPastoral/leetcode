function greatestLetter(s) {
    var set = new Set();
    var ascii = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        set.add(ch);
        if (set.has(ch.toLowerCase()) && set.has(ch.toUpperCase()))
            ascii = Math.max(ascii, ch.toUpperCase().charCodeAt(0));
    }
    return ascii ? String.fromCharCode(ascii) : '';
}
;
console.log(greatestLetter("lEeTcOdE"));
console.log(greatestLetter("arRAzFz"));
console.log(greatestLetter("AbCdEfGhIjK"));
console.log(greatestLetter("aBc"));
console.log(greatestLetter("AbCd"));
