function isPerfectSquare(num: number): boolean {
    let i = 0;
    while(true){
        const sum = i * i;
        if(sum === num) return true;
        if(sum > num) return false;
        i++;
    }

};

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(1));