function toggleLightBulbs(bulbs: number[]): number[] {
    const set = new Set<number>();
    for(const bulb of bulbs){
        if(!set.has(bulb)) set.add(bulb);
        else{
            set.delete(bulb);
        }
    }
    return Array.from(set.values()).sort((a:number, b:number) => a - b);

};

console.log(toggleLightBulbs([1,2,3,2,1])); // Output: [3]
console.log(toggleLightBulbs([1,2,3,4,5])); // Output: [1,2,3,4,5]