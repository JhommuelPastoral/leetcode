function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack:number[] = [];
    
    for(const val of pushed){
        stack.push(val);
        while(true){
            const pop = popped[0];
            const stackVal = stack[stack.length - 1];
            if(stackVal !== pop || stack.length === 0) break;
            else{
                stack.pop();
                popped.shift();
            }

        }
    }
    return stack.length === 0 && popped.length === 0 ;
};

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1])); // Output: true
console.log(validateStackSequences([1,2,3,4,5],[4,3,5,1,2])); // Output: false
console.log(validateStackSequences([1,2,3,4,5],[1,2,3,4,5])); // Output: true