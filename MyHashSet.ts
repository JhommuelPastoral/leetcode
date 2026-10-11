class MyHashSet {
    set: number[];
    constructor() {
        this.set = [];
    }

    add(key: number): void {
        if(!this.set.includes(key)) this.set.push(key);
    }

    remove(key: number): void {
        const temp:number[] = [];
        for(const val of this.set){
            if(val !== key) temp.push(val);
        }
        this.set = temp;
    }

    contains(key: number): boolean {
        return this.set.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


console.log("MyHashSet");
const myHashSet = new MyHashSet();
myHashSet.add(1);
myHashSet.add(2);
console.log(myHashSet.contains(1)); // Output: true
console.log(myHashSet.contains(3)); // Output: false
myHashSet.add(2);
console.log(myHashSet.contains(2)); // Output: true
myHashSet.remove(2);
console.log(myHashSet.contains(2)); // Output: false