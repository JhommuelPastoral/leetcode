function maximumOddBinaryNumber(s: string): string {
    let bitCounter = 0;
    for (const bit of s) {
        if (bit === '1') bitCounter++;
    }
    const zeros = s.length - bitCounter;
    return '1'.repeat(bitCounter - 1) + '0'.repeat(zeros) + '1';
}

console.log(maximumOddBinaryNumber("010100")); 
console.log(maximumOddBinaryNumber("010")); 
console.log(maximumOddBinaryNumber("111")); 