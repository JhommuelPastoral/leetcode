function arrangeWords(text: string): string {
    const textArr = text.split(' ').map((val) => val.toLowerCase()).sort((a:string, b:string) => a.length - b.length);
    textArr[0]= textArr[0][0].toUpperCase() + textArr[0].slice(1);
    return textArr.join(' ')
};

console.log(arrangeWords("Leetcode is cool"));