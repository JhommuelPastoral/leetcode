"use strict";
function canBeEqual(target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i])
            return false;
    }
    return true;
}
;
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
