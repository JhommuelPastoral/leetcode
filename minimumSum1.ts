function minimumSum(num: number): number {
    const sort = num.toString().split('').sort((a:string,b:string) => Number(a) - Number(b));
    return Number(sort[0] + sort[3]) + Number(sort[1] + sort[2]);

};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
console.log(minimumSum(1234));