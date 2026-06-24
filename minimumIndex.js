"use strict";
function minimumIndex(capacity, itemSize) {
    let index = -1;
    let min = Infinity;
    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] >= itemSize) {
            if (capacity[i] < min) {
                index = i;
                min = capacity[i];
            }
        }
    }
    return index;
}
;
console.log(minimumIndex([1, 2, 3, 4], 2));
console.log(minimumIndex([1, 2, 3, 4], 5));
console.log(minimumIndex([1, 2, 3, 4], 3));
