function findLucky(arr: number[]): number {
    const map = new Map<number,number>();
    let max = 0;
    for(const num of arr) map.set(num, (map.get(num) ?? 0) + 1);
    for(const [key, value] of Array.from(map)){
        if(key === value && key > max) max = key;
    }
    return max === 0 ? -1 : max;
};

console.log(findLucky([2,2,3,4]));
console.log(findLucky([1,2,3,4]));
console.log(findLucky([2,2,2,3,3]));
console.log(findLucky([5]));