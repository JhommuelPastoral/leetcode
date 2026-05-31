function maxSumSubArray(nums: number[], k: number): number {
  let sum = 0;
  for(let i = 0; i <= nums.length - k; i++){
    let temp = 0;
    for(let j = i; j < i + k; j++){
      temp += nums[j];
    }
    if(temp > sum) sum = temp;

  }

  return sum;
};

const arr = [1,4,1,10,25,3,5,0,26];
console.log(maxSumSubArray(arr,4));




