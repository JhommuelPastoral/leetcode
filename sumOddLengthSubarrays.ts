function sumOddLengthSubarrays(arr: number[]): number {
    let length = 3;
    let sum = arr.reduce((acc,curr) => acc + curr, 0);
    while(length <= arr.length){
        
        for(let i = 0; i <= arr.length - length; i++){
            for(let j = i; j < i + length; j++){
                sum += arr[j];
            }
        }
        length += 2;
    }
    return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3])); // 58
console.log(sumOddLengthSubarrays([1,2])); // 3
console.log(sumOddLengthSubarrays([10,11,12])); // 66
console.log(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10])); // 250