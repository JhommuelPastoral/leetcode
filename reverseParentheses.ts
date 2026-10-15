function reverseParentheses(s: string): string {
    const arr:string[] = [];

    for(const ch of s){
        if(ch !== ')') arr.push(ch);
        else{
            let reverse = '';
            for(let i = arr.length - 1; i>=0; i--){
                if(arr[i] === '('){
                    arr.pop();
                    break;
                }
                else reverse += arr.pop();
                
            }
            for(const char of reverse) arr.push(char);
        }
    }
    return arr.join('');

};


console.log(reverseParentheses("(abcd)")); // "dcba"
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")); // "apmnolkjihgfedcbq"