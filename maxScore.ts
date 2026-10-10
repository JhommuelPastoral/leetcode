function maxScore(s: string): number {
    let leftSum = Number.parseInt(s[0]) ? 0 : 1;
    let rightSum = 0;
    for(let i = 1; i < s.length; i++) rightSum += Number.parseInt(s[i]);
    let max = leftSum + rightSum;
    for(let i = 1; i < s.length-1; i++){
        if(s[i] === '0')leftSum++;
        else rightSum--;
        max = Math.max(leftSum + rightSum, max);
    }

    return max;
};

console.log(maxScore('011101'));
console.log(maxScore('00111'));