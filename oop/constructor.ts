interface HeroInterface {
  name: string;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  attackDamage: number;
  defense: number;
  level: number;
  experience: number;
  speed: number;
  attackSpeed: number;
  attack(target: HeroInterface): void;
  getHealth():number
}

abstract class Hero implements HeroInterface {
  name: string;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;

  attackDamage: number;
  defense: number;

  level: number;
  experience: number

  speed: number;
  attackSpeed: number;

  constructor(name: string, health: number, mana: number, attackDamage: number, defense: number, speed: number, attackSpeed: number) {
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

  abstract attack(target: HeroInterface): void;
  
  getHealth():number{
    return this.health;
  }

  getMana():number{
    return this.mana;
  }

  usePotionHealth(amount: number): void {
    if(this.health + amount > this.maxHealth) {
      this.health = this.maxHealth;
    }
    else this.health += amount;
  }

}

class Warrior extends Hero {
  constructor(name: string) {
    // name , health, mana, attackDamage, defense, speed, attackSpeed
    super(name, 150, 50, 20, 10, 5, 1);
  }

  attack(target: HeroInterface) {
    const damage = this.attackDamage - target.defense;
    target.health -= damage > 0 ? damage : 0;
  }
}

class Mage extends Hero {
  constructor(name: string) {
    // name , health, mana, attackDamage, defense, speed, attackSpeed
    super(name, 100, 200, 10, 5, 7, 1.5);
  }

  attack(target: HeroInterface) {
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


class Vehicle{

  go(){ console.log("Vehicle is moving"); };

}

class Car extends Vehicle{
  override go(){
    console.log("Car is moving");
  }
}

class Boat extends Vehicle{
  override go(){
    console.log("Boat is moving");
  }
}

const Vehicles:Vehicle[] = [new Car(), new Boat()];

for(const vehicle of Vehicles){
  vehicle.go();
}