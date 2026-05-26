function repeatedNTimes(nums: number[]): number {
    const map = new Map <number, number> ();
    for(const num of nums) map.set(num, (map.get(num) ?? 0) + 1);
    const max = Math.max(...Array.from(map.values()));
    for(const [key,value] of Array.from(map)) if(value === max) return key;
    

    return 0;

        
};

console.log(repeatedNTimes([1,2,3,3]))