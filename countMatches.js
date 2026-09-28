function countMatches(items, ruleKey, ruleValue) {
    var res = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (ruleKey === 'type' && item[0] === ruleValue)
            res++;
        else if (ruleKey === 'color' && item[1] === ruleValue)
            res++;
        else if (ruleKey === 'name' && item[2] === ruleValue)
            res++;
    }
    return res;
}
;
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver")); // Output: 1
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "type", "phone")); // Output: 2
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "name", "lenovo")); // Output: 1
