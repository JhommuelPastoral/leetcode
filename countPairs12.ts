
function countPairs(deliciousness: number[]): number {
    const MOD = 1000000007;
    const map = new Map<number, number>();

    let counter = 0;

    for (const num of deliciousness) {

        for (let power = 1; power <= 2 ** 21; power *= 2) {
            const complement = power - num;

            const frequency = map.get(complement) || 0;

            counter = (counter + frequency) % MOD;
        }

        map.set(num, (map.get(num) || 0) + 1);
    }

    return counter;
}


console.log(countPairs([1,3,5,7,9]));
console.log(countPairs([1,1,1,3,3,3,3]));
console.log(countPairs([1,2,3,4,5,6,7,8,9,10]));