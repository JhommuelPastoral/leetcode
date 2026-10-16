function sumOfNumberAndReverse(num) {
    for (var i = 0; i <= num; i++) {
        var reverse = 0;
        var tempNum = i;
        while (tempNum > 0) {
            var digit = tempNum % 10;
            reverse = (reverse * 10) + digit;
            tempNum = Math.floor(tempNum / 10);
        }
        if (reverse + i === num)
            return true;
    }
    return false;
}
;
console.log(sumOfNumberAndReverse(443)); // true
console.log(sumOfNumberAndReverse(63)); // true
console.log(sumOfNumberAndReverse(181)); // true
console.log(sumOfNumberAndReverse(36)); // false
