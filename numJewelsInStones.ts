function numJewelsInStones(jewels: string, stones: string): number {
    const set = new Set<string>(jewels);
    let counter = 0;
    for(const stone of stones){
        if(set.has(stone)) counter ++;
    }

    return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));