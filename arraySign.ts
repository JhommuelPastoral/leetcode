function arraySign(nums: number[]): number {
    let negatives = 0;

    for (const num of nums) {
        if (num === 0) return 0;
        if (num < 0) negatives++;
    }

    return negatives % 2 === 0 ? 1 : -1;
}

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // Output: 1
console.log(arraySign([1, 5, 0, 2, -3])); // Output: 0