"use strict";
function selfDividingNumbers(left, right) {
    let res = [];
    for (let i = left; i <= right; i++) {
        const digits = i.toString().split('');
        let isSelfDriving = true;
        for (const digit of digits) {
            if (i % Number.parseInt(digit) !== 0) {
                isSelfDriving = false;
                break;
            }
        }
        if (isSelfDriving)
            res.push(i);
    }
    return res;
}
;
console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));
console.log(selfDividingNumbers(1, 10000));
