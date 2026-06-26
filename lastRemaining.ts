function lastRemaining(n: number): number {
    let arr: number[] = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    let isLeft = true;

    while (arr.length > 1) {
        const next: number[] = [];

        if (isLeft) {
            for (let i = 1; i < arr.length; i += 2) {
                next.push(arr[i]);
            }
        } else {
            for (let i = arr.length - 2; i >= 0; i -= 2) {
                next.unshift(arr[i]);
            }
        }

        arr = next;
        isLeft = !isLeft;
    }

    return arr[0];
}

console.log(lastRemaining(9));
console.log(lastRemaining(4));