function uniformArray(nums1: number[]): boolean {
    const isAllEven = nums1.every((num) => num % 2 === 0);
    const isAllOdd = nums1.every((num) => num % 2 === 1);
    if(isAllEven || isAllOdd) return true;
    for(let i = 0; i < nums1.length; i++){
        let isOdd = false;
        if(nums1[i] % 2 === 1) continue;
        for(let j = 0; j < nums1.length; j++){
            if(i === j) continue;
            if(Math.abs((nums1[i] - nums1[j]) % 2) === 1){
                isOdd = true;
                break;
            }
        }
        if(!isOdd) return false;
    }


    return true;
};

console.log(uniformArray([2,4,6])); // Output: true
console.log(uniformArray([1,3,5]));
console.log(uniformArray([2,4,5])); // Output: true