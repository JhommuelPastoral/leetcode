function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (const [l, w] of dimensions) {
        const diagonal = l * l + w * w; 
        const area = l * w;
        if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > maxArea)) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
    }

    return maxArea;
}

console.log(areaOfMaxDiagonal([[4, 5], [2, 3], [1, 1]])); // Output: 20
console.log(areaOfMaxDiagonal([[1, 2], [3, 4], [5, 6]])); // Output: 30