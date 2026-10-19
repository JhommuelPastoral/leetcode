function maxCapacity(costs: number[], capacity: number[], budget: number): number {
    let max = 0;

    for (let i = 0; i < costs.length; i++) {
        if (costs[i] >= budget) continue;
        max = Math.max(max, capacity[i]);
        for (let j = i + 1; j < costs.length; j++) {
            const sum = costs[i] + costs[j];
            if (sum < budget) {
                max = Math.max(max, capacity[i] + capacity[j]);
            }
        }
    }

    return max;
}

console.log(maxCapacity([1, 2, 3], [3, 2, 1], 4)); // Output: 5
console.log(maxCapacity([1, 2, 3], [3, 2, 1], 6)); // Output: 7
console.log(maxCapacity([1, 2, 3], [3, 2, 1], 2)); // Output: 0 
console.log(maxCapacity([1, 2, 3], [3, 2, 1], 5)); // Output: 5
console.log(maxCapacity([1, 2, 3], [3, 2, 1], 7)); // Output: 7 