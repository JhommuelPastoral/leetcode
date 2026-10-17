function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number,number>();
    for(const num of nums) freq.set(num, (freq.get(num) ?? 0) + 1);

    const sorted = Array.from(freq).sort((a:number[], b:number[]) => b[1] - a[1]).map((val:number[]) => val[0]);
    return sorted.slice(0,k);
};


console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1,2], 2));
console.log(topKFrequent([1,1,1,2,2,3], 3));