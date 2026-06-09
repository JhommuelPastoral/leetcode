function arithmeticTriplets(nums: number[], diff: number): number {
    let res = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] - nums[i] === diff){
                for(let k = j + 1; k < nums.length; k++){
                    if(nums[k] - nums[j] === diff) res++;
                }
            }
        }

    }


    return res;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3));
console.log(arithmeticTriplets([4,5,6,7,8,9], 2));
console.log(arithmeticTriplets([1,2,3,4,5,6], 1));