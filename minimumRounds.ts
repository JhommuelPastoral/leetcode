function minimumRounds(tasks: number[]): number {
    const freq = new Map<number,number>();
    let res = 0;
    for(const task of tasks) freq.set(task, (freq.get(task) ?? 0 ) + 1);
    for(let [key,value] of Array.from(freq)){
        while(value > 0){
            if(value % 3 === 0){
                value -= 3;
                res++;
            }
            else{
                value -=2;
                res++;
            }
        }
        if(value < 0) return - 1;
    }
    return res;
};

console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4]));
console.log(minimumRounds([2,3,3]));
console.log(minimumRounds([2,3,3,3,3,3,3,3,3,3]));