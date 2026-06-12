function isIdealPermutation(nums) {
    var globalCounter = 0;
    var localCounter = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j])
                globalCounter++;
        }
        if (i < nums.length - 1) {
            if (nums[i] > nums[i + 1])
                localCounter++;
        }
    }
    return globalCounter === localCounter;
}
;
console.log(isIdealPermutation([1, 0, 2]));
console.log(isIdealPermutation([1, 2, 0]));
console.log(isIdealPermutation([0, 1, 2]));
