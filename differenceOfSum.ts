function differenceOfSum(nums: number[]): number {
    let elementSum = 0;
    let digitSum = 0;

    for(let num of nums){
        elementSum += num;
        while(num > 0){
            const digit = num % 10;
            num = Math.floor(num/10);
            digitSum+= digit;
        }
    }


    return Math.abs(elementSum - digitSum);
};

console.log(differenceOfSum([1,15,6,3])); // Output: 9
console.log(differenceOfSum([1,2,3,4])); // Output: 0