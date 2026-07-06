function hasSpecialSubstring(s, k) {
    for (var i = 0; i <= s.length - k; i++) {
        var ch = s[i];
        var same = true;
        for (var j = i + 1; j < i + k; j++) {
            if (s[j] !== ch) {
                same = false;
                break;
            }
        }
        if (!same)
            continue;
        var leftOk = i === 0 || s[i - 1] !== ch;
        var rightOk = i + k === s.length || s[i + k] !== ch;
        if (leftOk && rightOk)
            return true;
    }
    return false;
}
console.log(hasSpecialSubstring("aaabbb", 3)); // true
console.log(hasSpecialSubstring("aaabbb", 4)); // false
