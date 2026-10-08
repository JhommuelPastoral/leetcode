function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number,number>();

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])) map.set(nums[i], i);
        else{
            if(Math.abs(map.get(nums[i])! - i) <= k) return true;
            map.set(nums[i], i)
        }
    }


    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3)); // Output: true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // Output: true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // Output: false