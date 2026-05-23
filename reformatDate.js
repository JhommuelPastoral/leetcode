function reformatDate(date) {
    var dateArr = date.split(' ');
    var monthMap = new Map([
        ['Jan', '01'],
        ['Feb', '02'],
        ['Mar', '03'],
        ['Apr', '04'],
        ['May', '05'],
        ['Jun', '06'],
        ['Jul', '07'],
        ['Aug', '08'],
        ['Sep', '09'],
        ['Oct', '10'],
        ['Nov', '11'],
        ['Dec', '12'],
    ]);
    var day = '';
    for (var _i = 0, _a = dateArr[0]; _i < _a.length; _i++) {
        var ch = _a[_i];
        if (!isNaN(parseInt(ch)))
            day += ch;
        else
            break;
    }
    var formatedDate = "".concat(dateArr[2], "-").concat(monthMap.get(dateArr[1]), "-").concat(day.length === 1 ? "0".concat(day) : day);
    return formatedDate;
}
;
var date = "20th Oct 2052";
console.log(reformatDate(date));
