function maxOperations(nums) {
    var sum = nums[0] + nums[1];
    var res = 0;
    while (nums.length >= 2 && nums[0] + nums[1] === sum) {
        nums.shift();
        nums.shift();
        res++;
    }
    return res;
}
;
console.log(maxOperations([1, 2, 3, 4]));
console.log(maxOperations([3, 1, 3, 4, 3]));
console.log(maxOperations([9, 1, 3, 9, 3, 9, 9]));
