function countSegments(s: string): number {
    
    if(s === "") return 0;
    const arr = s.trim().split(' ').filter((val) => val.length >= 1);
    return arr.length;

};

console.log(countSegments("Hello, my name is John")); // Output: 5
console.log(countSegments("   Hello, my name is John   ")); // Output: 5
console.log(countSegments("")); // Output: 0