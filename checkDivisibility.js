"use strict";
function checkDivisibility(n) {
    let sum = 0;
    let productSum = 1;
    for (const char of n.toString()) {
        sum += Number.parseInt(char);
        productSum *= Number.parseInt(char);
    }
    const total = sum + productSum;
    return n % total === 0;
}
;
console.log(checkDivisibility(1));
console.log(checkDivisibility(12));
console.log(checkDivisibility(123));
console.log(checkDivisibility(1234));
