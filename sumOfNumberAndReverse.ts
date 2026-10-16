function sumOfNumberAndReverse(num: number): boolean {
    
    for(let i = 0; i <= num; i++){
        let reverse = 0;
        let tempNum = i;
        while(tempNum > 0){
            const digit = tempNum % 10;
            reverse = (reverse * 10) + digit;
            tempNum = Math.floor(tempNum/10);
        }
        if(reverse + i === num) return true; 
        
    }


    return false;
};


console.log(sumOfNumberAndReverse(443)); // true
console.log(sumOfNumberAndReverse(63)); // true
console.log(sumOfNumberAndReverse(181)); // true
console.log(sumOfNumberAndReverse(36)); // false