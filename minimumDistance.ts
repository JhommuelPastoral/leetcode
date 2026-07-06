function minimumDistance(nums: number[]): number {
    let min = Infinity;

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i === j || nums[i] !== nums[j]) continue;
            for(let k = 0; k < nums.length; k++){
                if(i === k || j === k || nums[j] !== nums[k]) continue;
                if(nums[j] === nums[k]) min = Math.min(min, Math.abs(i - j) + Math.abs(k - j) + Math.abs(k - i));
            }
        }
    }
    return min === Infinity ? -1 : min;
};

console.log(minimumDistance([1,2,3,1,1,3])); // 8
console.log(minimumDistance([1,2,3,4,5])); // -1