
function lengthOfLIS(nums: number[]): number {
    const dp: number[] = new Array(nums.length).fill(1);

    let max = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {

            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }

        }

        max = Math.max(max, dp[i]);
    }

    return max;
}



console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));