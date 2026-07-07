function processStr(s: string): string {
    let str = '';
    for(const char of s){
        if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) str += char;
        else if(char === '*'){
            const temp = str.slice(0, str.length - 1);
            str = temp;
        } 
        else if(char === '#') str += str;
        else if(char === '%'){
            let temp = '';
            for(let i = str.length - 1; i >= 0; i--){
                temp += str[i];
            }   
            str = temp;
        } 
    }

    return str;
};

console.log(processStr("abc*de#f%")); // Output: fedcba
console.log(processStr("abc%de#f%")); // Output: fedcba