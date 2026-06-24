"use strict";
function sumAndMultiply(n) {
    let noneZero = '';
    let sum = 0;
    for (const num of n.toString()) {
        if (num !== '0') {
            noneZero += num.toString();
            sum += Number.parseInt(num);
        }
    }
    return Number.isInteger(Number.parseInt(noneZero)) ? Number.parseInt(noneZero) * sum : 0;
}
;
console.log(sumAndMultiply(123)); // 36
console.log(sumAndMultiply(999)); // 729
