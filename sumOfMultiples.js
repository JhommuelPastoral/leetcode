function sumOfMultiples(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        var isDivisibleBy3 = i % 3 === 0;
        var isDivisibleBy5 = i % 5 === 0;
        var isDivisibleBy7 = i % 7 === 0;
        if (isDivisibleBy3 || isDivisibleBy5 || isDivisibleBy7)
            sum += i;
    }
    return sum;
}
;
console.log(sumOfMultiples(20));
