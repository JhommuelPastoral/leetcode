function addDigits(num: number): number {
    
    while(num >= 10){
        let temp = 0;
        while(num > 0){
            const digit = num % 10 ;
            num = Math.floor(num / 10);
            temp += digit;
        }
        num = temp;
    }

    return num;
};

console.log(addDigits(38)); // Output: 2
console.log(addDigits(0));  // Output: 0
console.log(addDigits(12345)); // Output: 6
