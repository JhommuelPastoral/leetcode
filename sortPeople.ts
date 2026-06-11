function sortPeople(names: string[], heights: number[]): string[] {
    const temp:[string,number][] = [];
    for(let i = 0; i < names.length; i++) temp.push([names[i],heights[i]]);
    temp.sort((a:[string,number], b:[string,number]) => b[1] - a[1]);
    return temp.map((val:[string,number]) => val[0]);
};

const names:string[] = ["Mary","John","Emma"];
const heights:number[] = [180,165,170];
console.log(sortPeople(names, heights));