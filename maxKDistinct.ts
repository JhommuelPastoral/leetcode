function maxKDistinct(nums: number[], k: number): number[] {
    return Array.from(new Set<number>(nums.sort((a: number, b: number) => b - a))).slice(0, k);
};

console.log(maxKDistinct([1, 2, 3, 4, 5], 3)); // [5, 4, 3]
console.log(maxKDistinct([5, 4, 3, 2, 1], 2)); // [5, 4]