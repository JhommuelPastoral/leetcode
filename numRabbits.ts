function numRabbits(answers: number[]): number {
    const map = new Map<number, number>();
    let res = 0;

    for (const ans of answers) {
        map.set(ans, (map.get(ans) ?? 0) + 1);
    }

    for (const [ans, value] of Array.from(map)) {
        const groupSize = ans + 1;
        const groups = Math.ceil(value / groupSize);

        res += groups * groupSize;
    }

    return res;
}

console.log(numRabbits([1, 1, 2])); // Output: 5
console.log(numRabbits([10, 10, 10])); // Output: 11
console.log(numRabbits([0, 0, 1, 1, 1])); // Output: 6