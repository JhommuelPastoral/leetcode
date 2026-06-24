"use strict";
function isAdjacentDiffAtMostTwo(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (Math.abs(Number.parseInt(s[i]) - Number.parseInt(s[i + 1])) > 2)
            return false;
    }
    return true;
}
;
console.log(isAdjacentDiffAtMostTwo("1234")); // true
console.log(isAdjacentDiffAtMostTwo("1235")); // false
console.log(isAdjacentDiffAtMostTwo("9876543210")); // true
