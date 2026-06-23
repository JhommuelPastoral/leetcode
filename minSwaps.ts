function minSwaps(nums: number[]): number {
    let res = 0;
    const map = new Map<number,number>();
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        let num = nums[i];
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        map.set(nums[i], sum);
    }
    const sorted = Array.from(map.entries()).sort((a:number[], b:number[]) => a[1] - b[1] || a[0] - b[0]);

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== sorted[i][0]){
            for(let j = 0; j < nums.length; j++){
                if(i === j) continue;
                if(nums[j] === sorted[i][0]){
                    const temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    res++;
                }
            }
        }
    }
    console.log(sorted)
    return res;

};

console.log(minSwaps([1,10,2,9,3,8,4,7,5,6]));
console.log(minSwaps([1,3,5,2,4,6,7]));