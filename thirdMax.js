function thirdMax(nums) {
    var arr = Array.from(new Set(nums.sort(function (a, b) { return b - a; })));
    return arr.length > 2 ? arr[2] : arr[0];
}
;
console.log(thirdMax([3, 2, 1])); // Output: 1
console.log(thirdMax([1, 2])); // Output: 2
