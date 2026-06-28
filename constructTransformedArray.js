function constructTransformedArray(nums) {
    var n = nums.length;
    var res = [];
    for (var i = 0; i < n; i++) {
        if (nums[i] === 0) {
            res.push(0);
        }
        else {
            var index = ((i + nums[i]) % n + n) % n;
            res.push(nums[index]);
        }
    }
    return res;
}
console.log(constructTransformedArray([1, 2, 3, 4, 5]));
console.log(constructTransformedArray([6, 1, 7, 5, 3]));
console.log(constructTransformedArray([0, 1, 2, 3, 4]));
