function isPrime(n: number): boolean {
    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function countPrimeSetBits(left: number, right: number): number {
    let res = 0;
    for(let i = left; i <= right; i++){
        const bits = i.toString(2);
        let counter = 0;
        for(const bit of bits){
            if(bit === "1") counter ++;
        }
        if(isPrime(counter)) res++;
    }


    return res;
};

console.log(countPrimeSetBits(6, 10)); // Output: 4
console.log(countPrimeSetBits(10, 15)); // Output: 5