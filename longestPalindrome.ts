function longestPalindrome(s: string): string {
    const isPalindrome = (left:number, right:number):boolean => {
        while(left < right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    let res = '';
    for(let i = 0; i < s.length; i++){
        let left = i;
        let right = left + 1;
        while(right < s.length){
            if(s[left] === s[right]){
                const length =(right + 1) - left; 
                if(isPalindrome(left,right) && length > res.length){
                    res = s.substring(left, right+1);
                }
            }
            right++;
        }

    }

    return res.length === 0 ? s[0] : res;
};  
console.log(longestPalindrome("babad")); // Output: "aba" or "bab"
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));