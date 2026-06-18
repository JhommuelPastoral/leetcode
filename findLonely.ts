function findLonely(nums: number[]): number[] {
    const adjacentMap = new Map<number,number>();
    const res:number[] = [];
    for(const num of nums){
        adjacentMap.set(num, (adjacentMap.get(num) ?? 0) + 1);
    }  
    for(const[key,value] of Array.from(adjacentMap)){
        if(value === 1 && !adjacentMap.has(key + 1) && !adjacentMap.has(key - 1)) res.push(key)
    }
    return res;
};
console.log(findLonely([10,6,5,8])) // [10,8]
console.log(findLonely([1,3,5,3])) // [1,5]
console.log(findLonely([1,1,1,1])) // []