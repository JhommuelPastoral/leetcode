function findFinalValue(nums: number[], original: number): number {
    const set = new Set<number>(nums);
    while(set.has(original)) original *= 2;
    return original;
};

console.log(findFinalValue([5,3,6,1,12], 3));
console.log(findFinalValue([2,7,9], 4));