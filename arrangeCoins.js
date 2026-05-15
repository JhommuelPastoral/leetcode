function arrangeCoins(n) {
    var stairs = 0;
    while (n >= 0) {
        stairs++;
        n -= stairs;
    }
    return stairs > 1 ? stairs - 1 : stairs;
}
;
console.log(arrangeCoins(5));
