function maxIceCream(costs, coins) {
    var max = 0;
    var maxCost = Math.max.apply(Math, costs);
    var countArr = new Array(maxCost + 1).fill(0);
    var newArr = [];
    for (var i = 0; i < costs.length; i++)
        countArr[costs[i]] += 1;
    for (var i = 0; i < countArr.length; i++) {
        if (countArr[i] === 0)
            continue;
        var tempArr = new Array(countArr[i]).fill(i);
        for (var _i = 0, tempArr_1 = tempArr; _i < tempArr_1.length; _i++) {
            var cost = tempArr_1[_i];
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
