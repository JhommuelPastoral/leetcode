function maxRotateFunction(nums: number[]): number {
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        let temp = 0;
        for(let j = 0; j < nums.length; j++){
            temp += (j * nums.at(j - i)!);
        }
        max = Math.max(max, temp);
    }


    return max;
};

console.log(maxRotateFunction([4, 3, 2, 6])); // 26
console.log(maxRotateFunction([100])); // 0
console.log(maxRotateFunction([1, 2, 3, 4])); // 10
console.log(maxRotateFunction([2, 1, 2, 4, 2, 2])); // 16