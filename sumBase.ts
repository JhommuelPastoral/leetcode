function sumBase(n: number, k: number): number {
    const str = n.toString(k);
    let sum = 0;

    for(const ch of str){
        sum += parseInt(ch);
    }

    return sum;
};

console.log(sumBase(34, 6));