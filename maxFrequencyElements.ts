function maxFrequencyElements(nums: number[]): number {
    const map = new Map<number,number>();
    let max = 0;
    let res = 0;
    for(const num of nums){
        map.set(num, (map.get(num) ?? 0) +1);
        max = Math.max(map.get(num), max);
    }

    for(const [key, value] of Array.from(map)){
        if(value === max) res += max;
    }


    return res;
};
console.log(maxFrequencyElements([1,2,3,1,2,3,3]));
console.log(maxFrequencyElements([1,1,1,2,2,3]));
console.log(maxFrequencyElements([1,2,3,4,5]));