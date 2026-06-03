function maxNumberOfBalloons(text: string): number {
    const map = new Map<string,number>([
        ['b',0],
        ['a',0],
        ['l',0],
        ['o',0],
        ['n',0]
    ]);

    for(const char of text){
        if(map.has(char)) map.set(char, map.get(char)! + 1);
    }
    return Math.floor(
        Math.min(
            map.get('b')!,
            map.get('a')!,
            map.get('l')! / 2,
            map.get('o')! / 2,
            map.get('n')!
        )
    );
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));