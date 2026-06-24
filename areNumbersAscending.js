"use strict";
function areNumbersAscending(s) {
    const arr = s.split(' ');
    let holder = -Infinity;
    for (const value of arr) {
        if (!isNaN(parseInt(value))) {
            if (parseInt(value) > holder)
                holder = parseInt(value);
            else
                return false;
        }
    }
    return true;
}
;
console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
