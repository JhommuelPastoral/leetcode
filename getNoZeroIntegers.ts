function getNoZeroIntegers(n: number): number[] {
    let sub = 1;
    while(true){
        const sum = n - sub;
        if(!sum.toString().includes('0') && !sub.toString().includes('0')) return[sub, sum];
        sub++;
    }    

};

console.log(getNoZeroIntegers(2)); // Output: [1, 1]
console.log(getNoZeroIntegers(11)); // Output: [2, 9]