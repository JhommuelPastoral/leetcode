/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    var left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            var temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
}
;
var arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]
