function maxDigitRange(nums: number[]): number {
    const range:number[] = [];

    for(const num of nums){
        let max = -Infinity;
        let min = Infinity;
        const str = num.toString();
        for(let i = 0; i < str.length; i++){
            max = Math.max(max, Number.parseInt(str[i]));
            min = Math.min(min, Number.parseInt(str[i]));
        }
        range.push(max - min);
    }   
    const maxRange = Math.max(...range);
    let sum = 0;
    for(let i = 0; i < range.length; i++){
        if(range[i] === maxRange) sum += nums[i];
    }

    return sum;
};

console.log(maxDigitRange([123, 456, 789])); // 1368
console.log(maxDigitRange([111, 222, 333])); // 0