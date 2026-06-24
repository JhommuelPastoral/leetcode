"use strict";
function minElement(nums) {
    let res = [];
    for (const num of nums) {
        const str = num.toString().split('');
        const sum = str.reduce((acc, cur) => acc + parseInt(cur), 0);
        res.push(sum);
    }
    return Math.min(...res);
}
;
console.log(minElement([1, 10, 100]));
