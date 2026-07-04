function minStartValue(nums: number[]): number {
    let min = Infinity;
    let startValue = 1;
    while(min === Infinity){
        let sum = startValue;
        for(const num of nums){
            sum += num;
            if(sum < 1) break;
        }
        if(sum >= 1) return startValue;
        startValue++;
    }

    return startValue;
};

console.log(minStartValue([-3,2,-3,4,2])); // Output: 5
console.log(minStartValue([1,2])); // Output: 1

