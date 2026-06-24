"use strict";
function findClosest(x, y, z) {
    const diff1 = Math.abs(x - z);
    const diff2 = Math.abs(y - z);
    if (diff1 < diff2)
        return 1;
    else if (diff1 === diff2)
        return 0;
    else
        return 2;
}
;
console.log(findClosest(1, 2, 3));
console.log(findClosest(1, 2, 2));
console.log(findClosest(1, 2, 1));
