function minLength(s: string): number {
    
    let res = '';
    while(true){
        let hasSubstring = false;
        let temp = '';
        for(let i = 0; i < s.length; i++){
            if((s[i] === 'A' && s[i+1] === 'B') || (s[i] === 'C' && s[i+1] === 'D')){
                i++;
                hasSubstring = true;
                continue;
            }
            else{
                temp += s[i];
            }
        }
        if(!hasSubstring) break;
        s = temp;
    }
    return s.length;
};

console.log(minLength('LEETCODE'));
console.log(minLength('ABFCACDB'));