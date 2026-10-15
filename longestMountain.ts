function longestMountain(arr: number[]): number {
    if(arr.length < 3) return 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(max > arr.length - 1 -i) break;
        let increasingCounter = 0;
        let decreasingCounter = 0;
        let isIncreasing = true;
        let isDecreasing = false;
        let temp = [arr[i]];
        for(let j = i + 1; j < arr.length; j++){
            if(temp[temp.length-1] < arr[j] && !isDecreasing){
                increasingCounter++;
                temp.push(arr[j]);
            }
            else{
                isIncreasing = false;
                isDecreasing = true;
            }
            if(!increasingCounter) break;
            if(temp[temp.length-1] > arr[j] && !isIncreasing){
                decreasingCounter++;
                temp.push(arr[j]);
            }
            else if(!decreasingCounter && !isIncreasing) break;
            else isDecreasing = false;
            if(!isIncreasing && !isDecreasing) break;
        }
        if(temp.length >= 3 && increasingCounter && decreasingCounter) max = Math.max(max, temp.length);

    }

    return max;
};

console.log(longestMountain([2,1,4,7,3,2,5])); // 5
console.log(longestMountain([2,2,2])); // 0
console.log(longestMountain([0,1,2,3,4,5,4,3,2,1,0])); // 11
console.log(longestMountain([0,1,2,3,4,5,6,7,8,9])); // 0