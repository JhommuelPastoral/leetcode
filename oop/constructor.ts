abstract class Hero {
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

  abstract attack(target: Hero): void;
  
  getHealth():number{
    return this.health;
  }

}

class Warrior extends Hero {
  constructor(name: string) {
    // name , health, mana, attackDamage, defense, speed, attackSpeed
    super(name, 150, 50, 20, 10, 5, 1);
  }

  attack(target: Hero) {
    const damage = this.attackDamage - target.defense;
    target.health -= damage > 0 ? damage : 0;
  }
}

class Mage extends Hero {
  constructor(name: string) {
    // name , health, mana, attackDamage, defense, speed, attackSpeed
    super(name, 100, 200, 10, 5, 7, 1.5);
  }

  attack(target: Hero) {
    const damage = this.attackDamage - target.defense;
    target.health -= damage > 0 ? damage : 0;
  }
}

const warrior = new Warrior("Conan");
const enemyMage = new Mage("Gandalf");

console.log(`${warrior.name} attacks ${enemyMage.name}`);
warrior.attack(enemyMage);
console.log(`${enemyMage.name} health: ${enemyMage.getHealth()}`);


