// const start = performance.now();
// function isPalindrome(s: string): boolean {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if(s[left].toLowerCase() === s[right].toLowerCase()) {
//       left++;
//       right--;
//     }
//     else return false;
//   }
//   return true;
// }
// const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);
// console.log(isPalindrome("abcdcba"));
// console.log(isPalindrome("Abcdcba"));
// 0.0035999999999987153 ms
var start = performance.now();
var str = "abcdcba";
var isPalindrome = str.split("").reverse().join("") === str;
var end = performance.now();
console.log("Execution time: ".concat(end - start, " ms"));
console.log(isPalindrome);
