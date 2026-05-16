

function medianSort(arr1: number[], arr2: number[]) : number{
  const merged = [...arr1, ...arr2].sort((a:number, b:number) => a - b);
  if (merged.length === 0) return 0;
  let median = 0;
  if(merged.length % 2 === 1){
    const size = Math.floor(merged.length / 2);
    median = merged[size];
    return median;
  }

  const size = Math.floor(merged.length / 2);
  median = (merged[size] + merged[size-1]) / 2;
  return median;

}

const arr1:number[] = [1,3];
const arr2:number[] = [2];

console.log(medianSort(arr1,arr2));
console.log(medianSort([1,2],[3,4]));
console.log(medianSort([1],[3]));
console.log(medianSort([1],[]));


