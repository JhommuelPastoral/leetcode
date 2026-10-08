function countSegments(s) {
    if (s === "")
        return 0;
    var arr = s.trim().split(' ').filter(function (val) { return val.length >= 1; });
    return arr.length;
}
;
console.log(countSegments("Hello, my name is John")); // Output: 5
console.log(countSegments("   Hello, my name is John   ")); // Output: 5
console.log(countSegments("")); // Output: 0
