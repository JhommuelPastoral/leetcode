"use strict";
function numDifferentIntegers(word) {
    const seen = new Set();
    for (let i = 0; i < word.length; i++) {
        let res = '';
        while (Number.isInteger(Number.parseInt(word[i]))) {
            res += word[i];
            i++;
        }
        if (res.length === 0)
            continue;
        const num = BigInt(res).toString();
        if (!seen.has(num))
            seen.add(num);
    }
    return seen.size;
}
;
console.log(numDifferentIntegers("a123bc34d8ef34")); // Output
console.log(numDifferentIntegers("leet1234code234")); // Output
console.log(numDifferentIntegers("a1b01c001")); // Output
