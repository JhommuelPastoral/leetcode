function checkIsRightDecreasing(arr:number[],left:number){
    for(let i =left; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]) continue;
        else return false;
    }
    return true;
}

function splitArray(nums: number[]): number {
    let left = 0;
    const leftArr = [nums[0]];
    const rightArr = [];
    let leftSum = nums[0];
    let rightSum = 0;
    let ans = Infinity;
    for(let i = 1; i < nums.length; i++){
        rightSum += nums[i];
        rightArr.push(nums[i]);
    }
    let isIncreasing = false;
    while(rightArr.length > 0){
        const isLeftIncreasing = leftArr[leftArr.length - 1] > (leftArr[leftArr.length - 2] ?? -Infinity); 
        let isRightDecreasing = false;
        if(!isIncreasing) isRightDecreasing = checkIsRightDecreasing(rightArr,left);
        else isRightDecreasing = true;
        if(isLeftIncreasing && !isRightDecreasing){
            const shift = rightArr[left];
            leftArr.push(shift);
            leftSum += shift;
            rightSum -= shift;
            left++;
        }

        else if(!isLeftIncreasing && isRightDecreasing) break;
        else if (isLeftIncreasing && isRightDecreasing) {
            ans = Math.min(Math.abs(leftSum - rightSum),ans);
            const shift = rightArr[left];
            leftArr.push(shift);
            leftSum += shift;         
            isIncreasing = true;
            rightSum -= shift;
            left++
        }
        else break;
    }
    
    return ans === Infinity ? -1 : ans;
};



console.log(splitArray([1,3,2,1])); // Output: 1
console.log(splitArray([1,2,3,4,5])); // Output: -1
console.log(splitArray([5,4,3,2,1])); // Output: -1