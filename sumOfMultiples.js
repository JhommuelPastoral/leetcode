"use strict";
function sumOfMultiples(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const isDivisibleBy3 = i % 3 === 0;
        const isDivisibleBy5 = i % 5 === 0;
        const isDivisibleBy7 = i % 7 === 0;
        if (isDivisibleBy3 || isDivisibleBy5 || isDivisibleBy7)
            sum += i;
    }
    return sum;
}
;
console.log(sumOfMultiples(20));
