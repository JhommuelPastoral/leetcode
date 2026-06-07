function specialTriplets(nums) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] !== nums[j] * 2)
                continue;
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] === nums[j] * 2 && nums[k] === nums[j] * 2)
                    res++;
            }
        }
    }
    return res;
}
;
console.log(specialTriplets([1, 2, 3, 4, 5, 6]));
console.log(specialTriplets([1, 1, 1, 1]));
console.log(specialTriplets([1, 2, 4, 8]));
console.log(specialTriplets([6, 3, 6]));
