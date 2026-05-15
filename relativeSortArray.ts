function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let res:number[] = [];
    const map = new Map<number,number>();
    let i = 0, j = 0;

    while (i < arr1.length) {
        map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
        i++;
    }

    const set = new Set([...arr2, ...arr1.sort((a,b) => a-b)]);

    
    set.forEach((value) => {
        res = [...res, ...new Array(map.get(value)).fill(value)];
    });

    return res;

};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));