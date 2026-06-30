function discountPrices(sentence, discount) {
    var result = [];
    for (var _i = 0, _a = sentence.split(" "); _i < _a.length; _i++) {
        var word = _a[_i];
        if (word[0] !== "$") {
            result.push(word);
            continue;
        }
        var digits = "";
        var valid = true;
        for (var i = 1; i < word.length; i++) {
            if (!Number.isInteger(Number(word[i]))) {
                valid = false;
                break;
            }
            digits += word[i];
        }
        if (!valid) {
            result.push(word);
            continue;
        }
        if (digits === "") {
            result.push("$");
            continue;
        }
        var price = Number(digits);
        var discounted = price * (1 - discount / 100);
        result.push("$".concat(discounted.toFixed(2)));
    }
    return result.join(" ");
}
console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50));
console.log(discountPrices("1 $2 $3 $4 and 456 $", 50));
