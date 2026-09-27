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
        console.log("".concat(this.name, " attacks ").concat(target.name, " for ").concat(damage > 0 ? damage : 0, " damage!"));
    };
    return Warrior;
}(Hero));
var warrior1 = new Warrior("Warrior 1");
var warrior2 = new Warrior("Warrior 2");
warrior1.attack(warrior2);
console.log("".concat(warrior2.name, " has ").concat(warrior2.getHealth(), " health left."));
