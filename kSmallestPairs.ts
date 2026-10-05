function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const pairs:number[][] = [];
    const res:number[] = [];
    for(const num1 of nums1){
        for(const num2 of nums2){
            pairs.push([num1,num2,num1+num2]);
        }
    }
    // pairs.sort((a:number[], b:number[]) => a[0] - b[0] || a[1] - b[1])
    pairs.sort((a:number[], b:number[]) => a[2] - b[2]);
    return pairs.slice(0,k).map((val:number[]) => [val[0],val[1]] );    
};

console.log(kSmallestPairs([1,7,11],[2,4,6],3));
console.log(kSmallestPairs([1,1,2],[1,2,3],2));
console.log(kSmallestPairs([1,2],[3],3));