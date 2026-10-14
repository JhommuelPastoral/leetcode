function nextGreatestLetter(letters, target) {
    var res = Infinity;
    var min = Infinity;
    for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
        var ch = letters_1[_i];
        if (ch.charCodeAt(0) > target.charCodeAt(0))
            res = Math.min(res, ch.charCodeAt(0));
        min = Math.min(min, ch.charCodeAt(0));
    }
    if (res === Infinity)
        return String.fromCharCode(min);
    return String.fromCharCode(res);
}
;
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // f
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // f
