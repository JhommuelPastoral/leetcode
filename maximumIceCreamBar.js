"use strict";
function maxIceCream(costs, coins) {
    let max = 0;
    const maxCost = Math.max(...costs);
    const countArr = new Array(maxCost + 1).fill(0);
    const newArr = [];
    for (let i = 0; i < costs.length; i++)
        countArr[costs[i]] += 1;
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] === 0)
            continue;
        const tempArr = new Array(countArr[i]).fill(i);
        for (const cost of tempArr) {
            if (cost <= coins) {
                max++;
                coins -= cost;
            }
            else
                return max;
        }
    }
    return max;
}
;
console.log(maxIceCream([1, 3, 2, 4, 1], 7));
