function countSeniors(details) {
    var res = 0;
    for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
        var detail = details_1[_i];
        var parsedAge = Number.parseInt("".concat(detail[11]).concat(detail[12]));
        if (parsedAge > 60)
            res++;
    }
    return res;
}
;
console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])); // Output: 2
console.log(countSeniors(["1313579440F2036", "2921522980M5644"])); // Output: 0
