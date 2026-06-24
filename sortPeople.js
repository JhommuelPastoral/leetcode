"use strict";
function sortPeople(names, heights) {
    const temp = [];
    for (let i = 0; i < names.length; i++)
        temp.push([names[i], heights[i]]);
    temp.sort((a, b) => b[1] - a[1]);
    return temp.map((val) => val[0]);
}
;
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
console.log(sortPeople(names, heights));
