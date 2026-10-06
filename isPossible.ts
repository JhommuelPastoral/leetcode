function isPossible(nums: number[]): boolean {
    const arrSet: Set<number>[] = [];

    for (let i = 0; i < nums.length; i++) {
        let isInserted = false;

        for (let j = arrSet.length - 1; j >= 0; j--) {
            const set = arrSet[j];
            if (set.has(nums[i] - 1) && !set.has(nums[i])) {
                set.add(nums[i]);
                isInserted = true;
                break;
            }
        }

        if (!isInserted) {
            arrSet.push(new Set<number>([nums[i]]));
        }
    }

    return arrSet.every((set) => set.size >= 3);
}


console.log(isPossible([1, 2, 3, 3, 4, 5]));
console.log(isPossible([1, 2, 3, 4, 4, 5]));
console.log(isPossible([1, 2, 3, 4, 5, 6]));