export class Player {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage. Health: ${this.health}`);
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated.`);
    }
  }

  restoreHealth(healing) {
    this.health += healing;
    console.log(
      `${this.name} restores ${healing} health. Health: ${this.health}`
    );
  }

  attackTarget(target) {
    const attackRoll = Math.random() * 20;
    const result = target.defend(this.attack, attackRoll);
    console.log(`${this.name} attacks ${target.name}: ${result}`);
  }

  defend(attack, attackRoll) {
    const defenseRoll = Math.random() * 20 + this.defense;
    if (attackRoll > defenseRoll) {
      this.takeDamage(attack);
      return `defense failed. ${attack} damage dealt.`;
    }
    return `defense successful. 0 damage dealt.`;
  }
}
