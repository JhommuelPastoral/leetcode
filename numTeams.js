"use strict";
function numTeams(rating) {
    let res = 0;
    for (let i = 0; i <= rating.length - 3; i++) {
        for (let j = i + 1; j <= rating.length - 2; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k] ||
                    rating[i] > rating[j] && rating[j] > rating[k])
                    res++;
            }
        }
    }
    return res;
}
;
console.log(numTeams([2, 5, 3, 4, 1]));
console.log(numTeams([2, 1, 3]));
console.log(numTeams([1, 2, 3, 4]));
