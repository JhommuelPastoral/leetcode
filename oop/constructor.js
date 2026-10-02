"use strict";
class Hero {
    name;
    health;
    maxHealth;
    mana;
    maxMana;
    attackDamage;
    defense;
    level;
    experience;
    speed;
    attackSpeed;
    constructor(name, health, mana, attackDamage, defense, speed, attackSpeed) {
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
    getHealth() {
        return this.health;
    }
    getMana() {
        return this.mana;
    }
    usePotionHealth(amount) {
        if (this.health + amount > this.maxHealth) {
            this.health = this.maxHealth;
        }
        else
            this.health += amount;
    }
}
class Warrior extends Hero {
    constructor(name) {
        // name , health, mana, attackDamage, defense, speed, attackSpeed
        super(name, 150, 50, 20, 10, 5, 1);
    }
    attack(target) {
        const damage = this.attackDamage - target.defense;
        target.health -= damage > 0 ? damage : 0;
    }
}
class Mage extends Hero {
    constructor(name) {
        // name , health, mana, attackDamage, defense, speed, attackSpeed
        super(name, 100, 200, 10, 5, 7, 1.5);
    }
    attack(target) {
        const damage = this.attackDamage - target.defense;
        target.health -= damage > 0 ? damage : 0;
    }
}
const warrior = new Warrior("Conan");
const enemyMage = new Mage("Gandalf");
console.log(`${warrior.name} attacks ${enemyMage.name}`);
warrior.attack(enemyMage);
console.log(`${enemyMage.name} health: ${enemyMage.getHealth()}`);
enemyMage.usePotionHealth(20);
console.log(`${enemyMage.name} uses a health potion. New health: ${enemyMage.getHealth()}`);
class Vehicle {
    go() { console.log("Vehicle is moving"); }
    ;
}
class Car extends Vehicle {
    go() {
        console.log("Car is moving");
    }
}
class Boat extends Vehicle {
    go() {
        console.log("Boat is moving");
    }
}
const Vehicles = [new Car(), new Boat()];
for (const vehicle of Vehicles) {
    vehicle.go();
}
