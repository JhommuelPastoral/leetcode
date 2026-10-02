"use strict";
function evenOddBit(n) {
    const str = n.toString(2);
    const res = Array(2).fill(0);
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "1") {
            if ((str.length - 1 - i) % 2 === 0)
                res[0]++;
            else
                res[1]++;
        }
    }
    return res;
}
;
console.log(evenOddBit(17)); // Output: [2,0]
console.log(evenOddBit(2)); // Output: [0,1]
console.log(evenOddBit(8)); // Output: [0,1]
