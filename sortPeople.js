function sortPeople(names, heights) {
    var temp = [];
    for (var i = 0; i < names.length; i++)
        temp.push([names[i], heights[i]]);
    temp.sort(function (a, b) { return b[1] - a[1]; });
    return temp.map(function (val) { return val[0]; });
}
;
var names = ["Mary", "John", "Emma"];
var heights = [180, 165, 170];
console.log(sortPeople(names, heights));
