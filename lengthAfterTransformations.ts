function lengthAfterTransformations(s: string, t: number): number {
    const arr = s.split('');
    const map = new Map<string,number>();

    for(let i =0; i < 26; i++) map.set(String.fromCharCode(97 + i), 97 + i);
    while(t > 0){
        let tempStr = '';
        for(const ch of s){
            if(ch === 'z') tempStr += 'ab';
            else tempStr += String.fromCharCode(map.get(ch)! + 1);
        }
        s = tempStr;
        t--;
    }
    console.log(s)
    return s.length;
};


console.log(lengthAfterTransformations("abcz", 1)); // Output: 6
console.log(lengthAfterTransformations("a", 2)); // Output: 4
console.log(lengthAfterTransformations("xyz", 3)); // Output: 12