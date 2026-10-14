function findMatrix(nums: number[]): number[][] {
    const res:number[][] = [];

    for(const num of nums){
        let isInserted = false;
        for(const arr of res){
            if(!arr.includes(num)){
                arr.push(num);
                isInserted = true;
                break;
            }
        }
        if(!isInserted) res.push([num]);
    }

    return res;
};

console.log(findMatrix([4,3,4,3,5,4,2]));
console.log(findMatrix([1,2,3]));
console.log(findMatrix([1,1,1,1,1]));
console.log(findMatrix([1,2,3,4,5,6,7,8,9,10]));