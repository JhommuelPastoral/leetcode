function buyChoco(prices: number[], money: number): number {
    prices.sort((a:number, b:number) => a - b);
    return prices[0] + prices[1] <= money ? money - (prices[0] + prices[1]) : money;  
};

console.log(buyChoco([1, 2, 3], 3));
console.log(buyChoco([3, 2, 3], 3));
console.log(buyChoco([5, 1, 2, 4, 6], 7));