function firstUniqueEven(nums: number[]): number {
    const map = new Map<number,number>();
    for(const num of nums){
        if(num % 2 === 0) map.set(num, (map.get(num) ?? 0) + 1);
    }
    for(const num of nums){
        if(map.get(num) === 1) return num;
    }

    return -1;
};

console.log(firstUniqueEven([1,2,3,4,2,1]));
console.log(firstUniqueEven([1,3,5,7]));