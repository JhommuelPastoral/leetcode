function getDescentPeriods(prices) {
    var res = prices.length;
    var i = 0;
    while (i < prices.length) {
        var val = prices[i];
        var j = i + 1;
        var counter = 0;
        while (j < prices.length) {
            if (val - 1 === prices[j]) {
                counter++;
                val = prices[j];
            }
            else {
                break;
            }
            j++;
        }
        res += counter * (counter + 1) / 2;
        i = j;
    }
    return res;
}
console.log(getDescentPeriods([3, 2, 1, 4]));
console.log(getDescentPeriods([8, 6, 7, 7]));
console.log(getDescentPeriods([1]));
