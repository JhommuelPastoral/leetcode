function longestNiceSubarray(nums: number[]): number {
    let res = 1;

    for(let i = 0; i < nums.length; i++){
        let count = 1;
        let temp = [nums[i]];
        for(let j = i + 1; j < nums.length; j++){
            const bitWise = nums[i] & nums[j];
            if(bitWise) break;
            let isbitWiseZero = true;
            for(let k = 0; k < temp.length; k++){
                if((temp[k] & nums[j])){
                    isbitWiseZero = false;
                    break;
                }
            }
            if(isbitWiseZero){
                temp.push(nums[j])
                res = Math.max(temp.length, res);
            }
            else break;
        }

    }

    return res;
};

console.log(longestNiceSubarray([1,3,8,48,10])); // Output: 3
console.log(longestNiceSubarray([3,1,5,11,13])); // Output: 1
console.log(longestNiceSubarray([1,2,3,4,5])); // Output: 2