function largestOddNumber(num) {
    for (var i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}
console.log(largestOddNumber("52")); // Output: "5"
console.log(largestOddNumber("4206")); // Output: ""
console.log(largestOddNumber("35427")); // Output: "35427"  
