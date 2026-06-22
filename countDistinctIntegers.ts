function countDistinctIntegers(nums: number[]): number {
    const res:number[] = [...nums]; 
    for(let num of nums){
        let reversed = 0;
        while(num > 0){
            const digit = num % 10;
            reversed = (reversed * 10) + digit;
            num = Math.floor(num/10);
        }
        res.push(reversed);
    }
    return Array.from(new Set<number>(res)).length;
};

console.log(countDistinctIntegers([1,13,10,12,31,11]));
console.log(countDistinctIntegers([1,2,3,4,5,6]));