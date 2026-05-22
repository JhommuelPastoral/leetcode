function isStrictlyPalindromic(n) {
    for (var i = 2; i <= n - 2; i++) {
        var base = i.toString(i);
        var reverseBased = base.split('').reverse().join('');
        if (base !== reverseBased)
            return false;
    }
    return true;
}
;
console.log(isStrictlyPalindromic(9));
