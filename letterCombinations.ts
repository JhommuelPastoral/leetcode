function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];

    const map = new Map<string, string[]>([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);

    let res: string[] = [''];

    for (let i = 0; i < digits.length; i++) {
        const letters = map.get(digits[i])!;
        const temp: string[] = [];

        for (let j = 0; j < res.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                temp.push(res[j] + letters[k]);
            }
        }
        res = temp;
    }

    return res;
}

console.log(letterCombinations('23'));