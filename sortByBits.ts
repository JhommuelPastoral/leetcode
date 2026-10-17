function sortByBits(arr: number[]): number[] {
    const map:number[][] = []
    for(const val of arr){
        const binary = val.toString(2);
        let bitCounter = 0;
        for(const bit of binary){
            if(bit === '1') bitCounter++;
        }
        map.push([val,bitCounter])
    }
    const sorted = map.sort((a:number[], b:number[]) => a[1] - b[1] || a[0] - b[0]).map((val:number[]) => val[0]);
    return sorted;
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));
console.log(sortByBits([10000,10000]));
console.log(sortByBits([2,3,5,7,11,13,17,19]));
console.log(sortByBits([10,100,1000,10000]));