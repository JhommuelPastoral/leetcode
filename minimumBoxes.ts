function minimumBoxes(apple: number[], capacity: number[]): number {
    let totalApples = apple.reduce((acc,curr) => acc + curr, 0);
    capacity.sort((a:number,b:number) => b - a);
    let res = 0;
    for(const size of capacity){
        totalApples -= size;
        res++;
        if(totalApples <= 0) break;
    }   

    return res;
};

console.log(minimumBoxes([3, 2, 5], [4, 3, 2])); // Output: 3
console.log(minimumBoxes([1, 2, 3], [3, 2, 1])); // Output: 2
console.log(minimumBoxes([10, 20, 30], [15, 25, 35])); // Output: 3