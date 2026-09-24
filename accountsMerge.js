var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function accountsMerge(accounts) {
    var map = new Map();
    var res = [];
    for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
        var account = accounts_1[_i];
        var name_1 = account[0];
        var acc = account.slice(1);
        if (!map.has(name_1)) {
            map.set(name_1, [new Set(acc)]);
            continue;
        }
        var emails = map.get(name_1);
        var merged = new Set(acc);
        var newGroups = [];
        for (var _a = 0, emails_1 = emails; _a < emails_1.length; _a++) {
            var emailSet = emails_1[_a];
            var isConnected = false;
            for (var _b = 0, _c = Array.from(merged); _b < _c.length; _b++) {
                var email = _c[_b];
                if (emailSet.has(email)) {
                    isConnected = true;
                    break;
                }
            }
            if (isConnected) {
                merged = new Set(__spreadArray(__spreadArray([], Array.from(merged), true), Array.from(emailSet), true));
            }
            else {
                newGroups.push(emailSet);
            }
        }
        newGroups.push(merged);
        map.set(name_1, newGroups);
    }
    for (var _d = 0, _e = Array.from(map); _d < _e.length; _d++) {
        var _f = _e[_d], name_2 = _f[0], emailSets = _f[1];
        for (var _g = 0, emailSets_1 = emailSets; _g < emailSets_1.length; _g++) {
            var emails = emailSets_1[_g];
            res.push(__spreadArray([name_2], Array.from(emails).sort(), true));
        }
    }
    return res;
}
console.log(accountsMerge([["John", "gG3y1@example.com", "bM9Hs@example.com"], ["John", "gG3y1@example.com", "gG3y1@example.com", "bM9Hs@example.com"], ["Mary", "Ls2j8@example.com"], ["John", "dN2lC@example.com"]]));
console.log(accountsMerge([["John", "gG3y1@example.com", "bM9Hs@example.com"], ["John", "gG3y1@example.com", "gG3y1@example.com", "bM9Hs@example.com"], ["Mary", "Ls2j8@example.com"], ["John", "dN2lC@example.com"]]));
