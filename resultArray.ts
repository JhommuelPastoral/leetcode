function resultArray(nums: number[]): number[] {
    const arr1:number[] = [nums[0]];
    const arr2:number[]= [nums[1]];

    for(let i = 2; i < nums.length; i++){
        if(arr1[arr1.length - 1] > arr2[arr2.length - 1]) arr1.push(nums[i]);
        else arr2.push(nums[i]);
    }
    return [...arr1, ...arr2];
};

console.log(resultArray([1,2,3,4,5,6])); // Output: [1,3,5,2,4,6]
console.log(resultArray([10,20,30,40,50])); // Output: [10,30,50,20,40]