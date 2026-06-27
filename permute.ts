function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    if (nums.length === 1) {
        return [[...nums]];
    }

    for (let i = 0; i < nums.length; i++) {
        const n = nums.shift()!;    
        const perms = permute(nums);
        for (const perm of perms) {
            perm.push(n);
        }
        result.push(...perms);
        nums.push(n);
    }

    return result;
}

console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1,2,3,4]));