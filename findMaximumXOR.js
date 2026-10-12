function findMaximumXOR(nums) {
    nums.sort(function (a, b) { return a - b; });
    var max = 0, left = 0, right = nums.length - 1;
    while (left < right) {
        var xor = nums[left] ^ nums[right];
        if (xor > max) {
            max = xor;
        }
        left++;
        if (left >= right) {
            right--;
            left = 0;
        }
    }
    return max;
}
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8])); // Output: 28
console.log(findMaximumXOR([0]));
console.log(findMaximumXOR([2, 4]));
