function calculateScore(instructions: string[], values: number[]): number {
    
    const visit = new Set<number>();
    let score:number = 0;
    let index:number = 0;

    while(true){
        if(index < 0 || index >= instructions.length || visit.has(index)) break;
        visit.add(index);
        if(instructions[index] === 'add'){
            score += values[index];
            index++;
        } 
        else{
            index += values[index];
        }
    }



    return score;
};

console.log(calculateScore(['add', 'add', 'jump', 'add'], [1, 2, 2, 3])); // Output: 3
console.log(calculateScore(['add', 'jump', 'add', 'jump'], [1, 2, 3, 4])); // Output: 1