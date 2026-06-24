"use strict";
function calPoints(operations) {
    const arr = [];
    for (const operation of operations) {
        if (operation === 'C')
            arr.pop();
        else if (operation === 'D')
            arr.push(arr[arr.length - 1] * 2);
        else if (operation === '+') {
            const sum = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(sum);
        }
        else
            arr.push(Number.parseInt(operation));
    }
    return arr.reduce((acc, curr) => acc + curr, 0);
}
;
console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));
