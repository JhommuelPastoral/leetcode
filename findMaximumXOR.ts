
function findMaximumXOR(nums: number[]): number {
    nums.sort((a: number, b: number) => a - b);

    let max = 0, left = 0, right = nums.length - 1;

    while (left < right) {
        const xor = nums[left] ^ nums[right];

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