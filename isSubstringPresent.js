"use strict";
function isSubstringPresent(s) {
    const reversed = s.split('').reverse();
    const set = new Set();
    for (let i = 0; i < s.length - 1; i++)
        set.add(`${reversed[i]}${reversed[i + 1]}`);
    for (let i = 0; i < s.length - 1; i++) {
        if (set.has(`${s[i]}${s[i + 1]}`))
            return true;
    }
    return false;
}
;
console.log(isSubstringPresent("abccba")); // Output: true
console.log(isSubstringPresent("abcdefg")); // Output: false
