
function partitionArray(nums: number[], k: number): boolean {
    if (nums.length % k !== 0) return false;

    const freq = new Map<number, number>();

    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    const groups = nums.length / k;

    for (const count of Array.from(freq.values())) {
        if (count > groups) return false;
    }

    return true;
}

console.log(partitionArray([1, 2, 3, 4], 2)); // true
console.log(partitionArray([1, 2, 3, 4, 5], 2)); // false
console.log(partitionArray([1, 2, 3, 4, 5, 6], 3)); // true
console.log(partitionArray([1, 2, 3, 4, 5, 6], 4)); // false

// function partitionArray(nums: number[], k: number): boolean {
//     const freq = new Map<number,number>();
//     for(const num of nums) freq.set(num, (freq.get(num) ?? 0)  + 1);
//     const sorted = Array.from(freq).sort((a:number[], b:number[]) => b[1] - a[1]);
//     const subsets:number[][] = [];
//     let counter = 0;
//     for(const [key,value] of sorted){
//         for(let i = 0; i < value; i++){
//             let isInserted = false;
//             for(let i = counter; i < subsets.length; i++){
//                 const subset = subsets[i];
//                 if(subset.length < k && subset[subset.length -1] !== key){
//                     subset.push(key);
//                     isInserted = true;
//                     break;
//                 }
//                 if(subset.length === k) counter++;
//             }
//             if(!isInserted) subsets.push([key]);
//         }
//     }
//     console.log(sorted)
//     // for(let i = subsets.length - 1; i >= 0; i--){
//     //     if(subsets[i].length !== k) return false;
//     // }

//     return true;
// };