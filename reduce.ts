type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let val = init;
    for(const num of nums){
        val = fn(val, num);
    }

    return val;
};

console.log(reduce([1,2,3,4], (accums, curr) => accums + curr, 0));
console.log(reduce([1,2,3,4], (accum, curr) => accum * curr, 1));
console.log(reduce([1,2,3,4], (accum, curr) => Math.max(accum, curr), -Infinity));