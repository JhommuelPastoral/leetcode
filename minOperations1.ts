function minOperations1(nums: number[], queries: number[]): number[] {
    const res:number[] = [];

    for(const query of queries){
        let sum = 0;
        for(const num of nums){
            sum += Math.abs(query - num);
        }
        res.push(sum);
    }

    return res;
};  

console.log(minOperations1([1,4,6,8,10], [3,5,7])); // Output: [20, 14, 16]
console.log(minOperations1([2, 5, 9], [1, 3, 6])); // Output: [15, 11, 9]