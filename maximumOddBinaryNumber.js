function maximumOddBinaryNumber(s) {
    var bitCounter = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var bit = s_1[_i];
        if (bit === '1')
            bitCounter++;
    }
    var zeros = s.length - bitCounter;
    return '1'.repeat(bitCounter - 1) + '0'.repeat(zeros) + '1';
}
console.log(maximumOddBinaryNumber("010100"));
console.log(maximumOddBinaryNumber("010"));
console.log(maximumOddBinaryNumber("111"));
