function findWinners(matches: number[][]): number[][] {
    const res: number[][] = [[], []];
    const players = new Set<number>();
    const loseMap = new Map<number, number>();

    for (const [win, lose] of matches) {
        players.add(win);
        players.add(lose);
        loseMap.set(lose, (loseMap.get(lose) ?? 0) + 1);
    }

    for (const player of Array.from(players)) {
        if (!loseMap.has(player)) {
            res[0].push(player);
        } else if (loseMap.get(player) === 1) {
            res[1].push(player);
        }
    }

    res[0].sort((a, b) => a - b);
    res[1].sort((a, b) => a - b);

    return res;
}

console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]));
console.log(findWinners([[2, 3], [1, 3], [5, 4], [6, 4]]));