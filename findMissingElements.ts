function findMissingElements(nums: number[]): number[] {

    const res:number[] = [];
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const set = new Set(nums);
    
    for(let i = min; i <= max; i++) if(!set.has(i)) res.push(i)

    return res;
};

console.log(findMissingElements([3,0,1]));