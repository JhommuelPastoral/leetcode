function longestSquareStreak(nums: number[]): number {
    nums.sort();
    const set = new Set<number>(nums);
    let max = -Infinity;
    for(const num of nums){
        let counter = 1;
        let square = num * num;
        while(set.has(square)){
            counter++;
            square = square * square;
        }
        if(counter >= 2) max = Math.max(max,counter);
    }


    return max < 0 ? -1 : max;
};

console.log(longestSquareStreak([4,3,6,16,8,2])); // 3
console.log(longestSquareStreak([2,3,5,6,7])); // -1
console.log(longestSquareStreak([4,2,3,9,16])); // 3