function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
    const index:number[] = [];
    const res:number[] = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === x) index.push(i);
    }

    for(const query of queries){
        if(query - 1 < index.length) res.push(index[query - 1]);
        else res.push(-1);
    }


    return res;
};


console.log(occurrencesOfElement([1,2,3,4,5], [1,3,5,2,4], 5));
console.log(occurrencesOfElement([1,2,3,4,5], [1,3,5,2,4], 1));
console.log(occurrencesOfElement([1,2,3,4,5], [1,3,5,2,4], 6));