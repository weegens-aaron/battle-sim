/**
 * Player Class - Represents a character in the battle simulation
 * 
 * In JavaScript, a 'class' is a blueprint for creating objects with specific properties and methods.
 * The 'export' keyword makes this class available to be imported in other files.
 */
export class Player {
  /**
   * Constructor - Special method that creates and initializes a new Player object
   * 
   * @param {string} name - The name of the player
   * @param {number} health - The player's starting health points
   * @param {number} attack - The player's attack power
   * @param {number} defense - The player's defense rating
   * 
   * When we create a new Player with 'new Player(...)', this constructor runs automatically.
   * The 'this' keyword refers to the specific Player object being created.
   */
  constructor(name, health, attack, defense) {
    // These create properties on the Player object
    this.name = name;       // Store the player's name
    this.health = health;   // Store the player's health
    this.attack = attack;   // Store the player's attack power
    this.defense = defense; // Store the player's defense rating
  }

  /**
   * takeDamage - Method to reduce a player's health when they take damage
   * 
   * @param {number} damage - The amount of damage to subtract from health
   * 
   * Methods are functions that belong to a class and can access the object's properties.
   */
  takeDamage(damage) {
    // The '-=' operator subtracts the right value from the left variable
    this.health -= damage; // Same as: this.health = this.health - damage;
    
    // Template literals (using backticks `) allow embedding variables with ${}
    // This is more readable than: this.name + " takes " + damage + " damage..."
    console.log(`${this.name} takes ${damage} damage. Health: ${this.health}`);
    
    // If statement checks if health is 0 or negative
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated.`);
    }
  }

  /**
   * restoreHealth - Method to increase a player's health when they heal
   * 
   * @param {number} healing - The amount of health to restore
   */
  restoreHealth(healing) {
    // The '+=' operator adds the right value to the left variable
    this.health += healing; // Same as: this.health = this.health + healing;
    
    // Multi-line template literal with proper indentation
    console.log(
      `${this.name} restores ${healing} health. Health: ${this.health}`
    );
  }

  /**
   * attackTarget - Method to attack another player
   * 
   * @param {Player} target - The Player object being attacked
   */
  attackTarget(target) {
    // 'const' declares a variable that cannot be reassigned (unlike 'let')
    // Math.random() generates a number between 0 and 1, multiplying by 20 gives 0-20
    const attackRoll = Math.random() * 20;
    
    // Call the defend method on the target player and store the result
    // This shows how objects can interact with each other
    const result = target.defend(this.attack, attackRoll);
    
    // Log the attack result using template literals
    console.log(`${this.name} attacks ${target.name}: ${result}`);
  }

  /**
   * defend - Method to determine if an attack hits or misses
   * 
   * @param {number} attack - The attack power of the attacker
   * @param {number} attackRoll - The random attack roll value
   * @returns {string} - A message describing the result of the defense
   */
  defend(attack, attackRoll) {
    // Calculate defense roll: random number (0-20) plus defense rating
    const defenseRoll = Math.random() * 20 + this.defense;
    
    // If the attack roll is higher than the defense roll, the attack hits
    if (attackRoll > defenseRoll) {
      // Call the takeDamage method on this player
      this.takeDamage(attack);
      // Return a string describing what happened (using template literals)
      return `defense failed. ${attack} damage dealt.`;
    }
    
    // If we reach here, the attack missed
    // The 'return' keyword sends a value back to wherever this method was called
    return `defense successful. 0 damage dealt.`;
  }
}
