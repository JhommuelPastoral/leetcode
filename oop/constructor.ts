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
    console.log(`${this.name} attacks ${target.name} for ${damage > 0 ? damage : 0} damage!`);
  }
}

const warrior1 = new Warrior("Warrior 1");
const warrior2 = new Warrior("Warrior 2");

warrior1.attack(warrior2);


console.log(`${warrior2.name} has ${warrior2.getHealth()} health left.`);