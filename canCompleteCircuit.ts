function canCompleteCircuit(gas: number[], cost: number[]): number {
    for (let i = 0; i < gas.length; i++) {
        if (gas[i] < cost[i]) continue;
        let tempCounter = i + 1;
        let tank = gas[i] - cost[i];
        let isValid = true;
        while (tempCounter !== i) {
            if(tempCounter === gas.length) tempCounter = 0;
            tank += gas[tempCounter] - cost[tempCounter];

            if (tank < 0) {
                isValid = false;
                break;
            }
            tempCounter++;
        }
        if (isValid) return i;
    }

    return -1;
}


console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Output: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Output: -1
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1])); // Output: 4
console.log(canCompleteCircuit([3,1,1], [1,2,2])); // Output: 0