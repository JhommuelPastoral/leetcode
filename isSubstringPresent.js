function isSubstringPresent(s) {
    var reversed = s.split('').reverse();
    var set = new Set();
    for (var i = 0; i < s.length - 1; i++)
        set.add("".concat(reversed[i]).concat(reversed[i + 1]));
    for (var i = 0; i < s.length - 1; i++) {
        if (set.has("".concat(s[i]).concat(s[i + 1])))
            return true;
    }
    return false;
}
;
console.log(isSubstringPresent("abccba")); // Output: true
console.log(isSubstringPresent("abcdefg")); // Output: false
