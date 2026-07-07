function thirdMax(nums: number[]): number {
    const arr:number[] = Array.from(new Set<number>(nums.sort((a:number, b:number) => b - a)));
    return arr.length > 2 ? arr[2] : arr[0];
};

console.log(thirdMax([3, 2, 1])); // Output: 1
console.log(thirdMax([1, 2])); // Output: 2