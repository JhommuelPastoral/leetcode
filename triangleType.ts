function triangleType(nums: number[]): string {
    nums.sort((a:number, b:number) => a -b);
    if(nums[0] + nums[1] <= nums[2]) return 'none'
    const set = new Set<number>(nums);

    if(set.size === 1) return 'equilateral';
    else if(set.size === 2) return 'isosceles';
    else return 'scalene'
};

console.log(triangleType([3, 4, 5])); // scalene
console.log(triangleType([2, 2, 3])); // isosceles
console.log(triangleType([1, 1, 1])); // equilateral