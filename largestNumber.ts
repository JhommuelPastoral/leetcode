function largestNumber(nums: number[]): string {
    nums.sort((a, b) =>Number(`${b}${a}`) - Number(`${a}${b}`));
    const number = BigInt(nums.join(''));
    return number.toString();
};

console.log(largestNumber([10,2])); // "210"
console.log(largestNumber([3,30,34,5,9])); // "9534330"
console.log(largestNumber([1])); // "1"