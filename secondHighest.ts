function secondHighest(s: string): number {
    let max = -1;
    let secondMax = -1;
    for(const ch of s){
        if(Number.parseInt(ch) || ch === '0'){
            if(Number.parseInt(ch) > max){
                secondMax = max;
                max = Number.parseInt(ch)
            }
            if(Number.parseInt(ch) > secondMax && Number.parseInt(ch) < max) secondMax = Number.parseInt(ch)
        }
    }   


    return secondMax;
};


console.log(secondHighest('abc111'));
console.log(secondHighest('abc1111'));
console.log(secondHighest('abc'));