function maximumValue(strs: string[]): number {
    let max = 0;

    for(const word of strs){
        let temp = '';
        let isAllDigit = true;
        for(const char of word){
            if(Number.isInteger(Number.parseInt(char))) temp += char;
            else{
                isAllDigit = false;
                break;
            }
        }
        if(!isAllDigit) max = Math.max(max, word.length);
        else max = Math.max(max, Number.parseInt(temp));
    }

    return max;
};  

console.log(maximumValue(["alic3","bob","3","4","00000"]));
console.log(maximumValue(["1","01","001","0001"]));