function minimumOperations(nums) {
    var operation = 0;
    while (true) {
        var x = Infinity;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] !== 0)
                x = Math.min(nums[i], x);
        }
        if (x !== Infinity) {
            for (var i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                    nums[i] -= x;
                }
            }
            operation++;
        }
        else
            break;
    }
    return operation;
}
;
console.log(minimumOperations([1, 5, 0, 3, 5]));
console.log(minimumOperations([0]));
console.log(minimumOperations([1, 2, 3]));
