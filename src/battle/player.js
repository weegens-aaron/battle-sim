export class Player {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  restoreHealth(healing) {
    this.health += healing;
  }

  attackTarget(target) {
    // attack target
    target.defend(this.attack);
  }

  defend(attack) {
    // Apply damage to the player
    this.takeDamage(attack);
  }
}
