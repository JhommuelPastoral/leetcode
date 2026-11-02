function getDescentPeriods(prices: number[]): number {
    let res = prices.length;
    let i = 0;

    while (i < prices.length) {
        let val = prices[i];
        let j = i + 1;
        let counter = 0;

        while (j < prices.length) {
            if (val - 1 === prices[j]) {
                counter++;
                val = prices[j];
            } else {
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