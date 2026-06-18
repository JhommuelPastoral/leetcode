function majorityElement(nums: number[]): number[] {
    const size = nums.length / 3;
    let res = [];
    const map = new Map<number,number>();
    const seen = new Set<number>();
    for(const num of nums){
        map.set(num, (map.get(num) ?? 0) + 1);
        if(map.get(num)! > size && !seen.has(num)) {
            res.push(num);
            seen.add(num);
        }
    } 
    return res;
};

console.log(majorityElement([3,2,3])) // [3]
console.log(majorityElement([1,1,1,3,3,2,2,2])) // [1,2]
console.log(majorityElement([1,2])) // [1,2]
