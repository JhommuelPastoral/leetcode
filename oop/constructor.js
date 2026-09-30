var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero(name, health, mana, attackDamage, defense, speed, attackSpeed) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.mana = mana;
        this.maxMana = mana;
        this.attackDamage = attackDamage;
        this.defense = defense;
        this.level = 1;
        this.experience = 0;
        this.speed = speed;
        this.attackSpeed = attackSpeed;
    }
    Hero.prototype.getHealth = function () {
        return this.health;
    };
    Hero.prototype.getMana = function () {
        return this.mana;
    };
    Hero.prototype.usePotionHealth = function (amount) {
        if (this.health + amount > this.maxHealth) {
            this.health = this.maxHealth;
        }
        else
            this.health += amount;
    };
    return Hero;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name) {
        // name , health, mana, attackDamage, defense, speed, attackSpeed
        return _super.call(this, name, 150, 50, 20, 10, 5, 1) || this;
    }
    Warrior.prototype.attack = function (target) {
        var damage = this.attackDamage - target.defense;
        target.health -= damage > 0 ? damage : 0;
    };
    return Warrior;
}(Hero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name) {
        // name , health, mana, attackDamage, defense, speed, attackSpeed
        return _super.call(this, name, 100, 200, 10, 5, 7, 1.5) || this;
    }
    Mage.prototype.attack = function (target) {
        var damage = this.attackDamage - target.defense;
        target.health -= damage > 0 ? damage : 0;
    };
    return Mage;
}(Hero));
var warrior = new Warrior("Conan");
var enemyMage = new Mage("Gandalf");
console.log("".concat(warrior.name, " attacks ").concat(enemyMage.name));
warrior.attack(enemyMage);
console.log("".concat(enemyMage.name, " health: ").concat(enemyMage.getHealth()));
enemyMage.usePotionHealth(20);
console.log("".concat(enemyMage.name, " uses a health potion. New health: ").concat(enemyMage.getHealth()));
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.go = function () { console.log("Vehicle is moving"); };
    ;
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.go = function () {
        console.log("Car is moving");
    };
    return Car;
}(Vehicle));
var Boat = /** @class */ (function (_super) {
    __extends(Boat, _super);
    function Boat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boat.prototype.go = function () {
        console.log("Boat is moving");
    };
    return Boat;
}(Vehicle));
var Vehicles = [new Car(), new Boat()];
for (var _i = 0, Vehicles_1 = Vehicles; _i < Vehicles_1.length; _i++) {
    var vehicle = Vehicles_1[_i];
    vehicle.go();
}
