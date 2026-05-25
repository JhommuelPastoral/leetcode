function areNumbersAscending(s) {
    var arr = s.split(' ');
    var holder = -Infinity;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (!isNaN(parseInt(value))) {
            if (parseInt(value) > holder)
                holder = parseInt(value);
            else
                return false;
        }
    }
    return true;
}
;
console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
