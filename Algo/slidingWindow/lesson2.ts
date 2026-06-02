function maxProductSubArray(nums: number[], k: number): number {
  let window = nums.slice(0,k).reduce((a:number, b:number) => a * b, 1);
  let max = window;

  for(let i = k; i < nums.length; i++){
    window *= nums[i];
    window /= nums[i-k];
    max = Math.max(max, window);
    console.log(window);
  }

  return max;
}

export const arr = [1,4,1,6,-3,3,-5,2,26];

console.log(maxProductSubArray(arr,4));


function hasSubtringAnagram(s: string, anagram: string): boolean {
  const mapAnagram = new Map <string, number>();
  const window = new Map<string, number>();
  for(const ch of anagram) mapAnagram.set(ch, (mapAnagram.get(ch) ?? 0) + 1);
  for(let i = 0; i < anagram.length; i++) window.set(s[i], (window.get(s[i]) ?? 0) + 1);
  let isAnagram = true;
  for(const [key,value] of Array.from(mapAnagram)) {
    if(window.get(key) !== value) {
      isAnagram = false;
      break;
    }
  }
  if(isAnagram) return true;

  for(let i = anagram.length; i < s.length; i++){
    window.set(s[i], (window.get(s[i]) ?? 0) + 1);
    const prev = s[i - anagram.length];
    window.set(prev, window.get(prev)! - 1);
    if(window.get(prev) === 0) window.delete(prev);
    isAnagram = true;
    for(const [key,value] of Array.from(mapAnagram)) {
      if(window.get(key) !== value) {
        isAnagram = false;
        break;
      }
    }
    if(isAnagram) return true;

  }




  return false;
}


console.log(hasSubtringAnagram("greyhounds", "hoy"));