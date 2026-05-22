function isStrictlyPalindromic(n: number): boolean {
    
    for(let i = 2; i <= n-2; i++){
        const base = i.toString(i);
        const reverseBased = base.split('').reverse().join('');
        if(base !== reverseBased) return false;
    }

    return true;
};

console.log(isStrictlyPalindromic(9));