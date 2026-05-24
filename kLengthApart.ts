function kLengthApart(nums: number[], k: number): boolean {
    
    let i = 0;

    while (i < nums.length) {

        if (nums[i] === 1) {

            let temp = i + 1;
            let count = 0;

            while (temp < nums.length && nums[temp] !== 1) {
                temp++;
                count++;
            }

            if (temp < nums.length && nums[temp] === 1 && count < k) {
                return false;
            }

            i = temp;
        }
        else {
            i++;
        }
    }

    return true;
}

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));