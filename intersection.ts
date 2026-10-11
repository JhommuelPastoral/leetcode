function intersection(nums: number[][]): number[] {
    const arrSet:Set<number>[] = [];    
    const res:number[] = []; 
    for(let i = 1; i <nums.length; i++) arrSet.push(new Set<number>(nums[i]));
    
    for(const num of nums[0]){
        let isPresent = true;
        for(const set of arrSet){
            if(!set.has(num)){
                isPresent = false;
                break;
            }  
        }
        if(isPresent) res.push(num)

    }
    res.sort((a:number,b:number) => a - b);
    return res;
};


console.log(intersection([[1,2,3],[4,5,6],[7,8,9]]));
console.log(intersection([[1,2,3],[2,3,4],[3,4,5]]));
console.log(intersection([[1,2,3],[4,5,6]]));