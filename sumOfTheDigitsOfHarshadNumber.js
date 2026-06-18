function sumOfTheDigitsOfHarshadNumber(x) {
    var sum = 0;
    var original = x;
    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    return original % sum === 0 ? sum : -1;
}
;
console.log(sumOfTheDigitsOfHarshadNumber(10)); // 1
console.log(sumOfTheDigitsOfHarshadNumber(12)); // 3
console.log(sumOfTheDigitsOfHarshadNumber(11)); // -1
