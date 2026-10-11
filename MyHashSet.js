var MyHashSet = /** @class */ (function () {
    function MyHashSet() {
        this.set = [];
    }
    MyHashSet.prototype.add = function (key) {
        if (!this.set.includes(key))
            this.set.push(key);
    };
    MyHashSet.prototype.remove = function (key) {
        var temp = [];
        for (var _i = 0, _a = this.set; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val !== key)
                temp.push(val);
        }
        this.set = temp;
    };
    MyHashSet.prototype.contains = function (key) {
        return this.set.includes(key);
    };
    return MyHashSet;
}());
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
console.log("MyHashSet");
var myHashSet = new MyHashSet();
myHashSet.add(1);
myHashSet.add(2);
console.log(myHashSet.contains(1)); // Output: true
console.log(myHashSet.contains(3)); // Output: false
myHashSet.add(2);
console.log(myHashSet.contains(2)); // Output: true
myHashSet.remove(2);
console.log(myHashSet.contains(2)); // Output: false
