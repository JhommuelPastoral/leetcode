function largestNumber(nums) {
    nums.sort(function (a, b) { return Number("".concat(b).concat(a)) - Number("".concat(a).concat(b)); });
    var number = BigInt(nums.join(''));
    return number.toString();
}
;
console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
console.log(largestNumber([1])); // "1"
