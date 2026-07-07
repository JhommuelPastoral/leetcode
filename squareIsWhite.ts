function squareIsWhite(coordinates: string): boolean {
    const isWhite = coordinates.charCodeAt(0) % 2 === 0;
    return isWhite ? Number(coordinates[1]) % 2 === 1 : Number(coordinates[1]) % 2 === 0;
};

console.log(squareIsWhite("a1")); // Output: false
console.log(squareIsWhite("h3")); // Output: true
console.log(squareIsWhite("c7")); // Output: false