function largeGroupPositions(s: string): number[][] {
    const result:number[][] = [];

    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === s[i+1]){
            let end = i + 1;
            while(s[end] === s[end+1]){
                end++;
            }
            if(end - i + 1>= 3) result.push([i,end]);
            i = end;
        }
    }


    return result;
};
console.log(largeGroupPositions("abbxxxxzzy")); // [[3,6]]
console.log(largeGroupPositions("abc")); // []
console.log(largeGroupPositions("abcdddeeeeaabbbcd")); // [[3,5],[6,9],[12,14]]