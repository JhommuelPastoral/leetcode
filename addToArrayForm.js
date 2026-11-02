function addToArrayForm(num, k) {
    var _a;
    var res = [];
    var carry = 0;
    while (num.length - 1 >= 0 || k > 0) {
        var digit1 = (_a = num.pop()) !== null && _a !== void 0 ? _a : 0;
        var digit2 = k ? k % 10 : 0;
        var sum = digit1 + digit2 + carry;
        k = Math.floor(k / 10);
        if (sum >= 10) {
            res.unshift(sum % 10);
            carry = Math.floor(sum / 10);
        }
        else {
            res.unshift(sum);
            carry = 0;
        }
    }
    while (carry > 0) {
        var digit = carry % 10;
        res.unshift(digit);
        carry = Math.floor(carry / 10);
    }
    return res;
}
;
console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
