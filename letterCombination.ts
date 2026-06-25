function backTrack(digits: Map<string,string>, curStr:string, index:number, res:string[], s:string): string[]{
    if(curStr.length === s.length){
        res.push(curStr);
        return res;
    }

    for(const char of digits.get(s[index])!){
        backTrack(digits, curStr + char, index + 1, res, s);
    }
    return res;
}

function letterCombination(digits: string): string[] {
    const res:string[] = [];
    const digitsMap = new Map<string, string>([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ]);
    backTrack(digitsMap, '', 0, res, digits);
    return res;

};