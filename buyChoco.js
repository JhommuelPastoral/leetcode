function buyChoco(prices, money) {
    prices.sort(function (a, b) { return a - b; });
    return prices[0] + prices[1] <= money ? money - (prices[0] + prices[1]) : money;
}
;
console.log(buyChoco([1, 2, 3], 3));
console.log(buyChoco([3, 2, 3], 3));
console.log(buyChoco([5, 1, 2, 4, 6], 7));
