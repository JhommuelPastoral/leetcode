"use strict";
function minMaxGame(nums) {
    let res = [...nums];
    while (res.length > 1) {
        const temp = [];
        for (let i = 0; i < res.length / 2; i++) {
            if (i % 2 === 0) {
                temp.push(Math.min(res[i * 2], res[i * 2 + 1]));
            }
            else {
                temp.push(Math.max(res[i * 2], res[i * 2 + 1]));
            }
        }
        res = temp;
    }
    return res[0];
}
console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // 1
console.log(minMaxGame([3])); // 3
