function checkGoodInteger(n) {
    var digitSum = 0;
    var squareSum = 0;
    while (n > 0) {
        var digit = n % 10;
        n = Math.floor(n / 10);
        digitSum += digit;
        squareSum += Math.pow(digit, 2);
    }
    return squareSum - digitSum >= 50;
}
;
console.log(checkGoodInteger(123)); // Output: false
console.log(checkGoodInteger(999)); // Output: true
console.log(checkGoodInteger(123456789)); // Output: true
