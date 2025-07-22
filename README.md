# Battle Simulation

A simple text-based battle simulation game written in JavaScript. This project demonstrates basic object-oriented programming concepts and is perfect for beginners learning JavaScript.

## Project Overview

This battle simulation creates two characters (a hero and an enemy) who take turns attacking each other until one of them is defeated. The simulation uses:

- **Classes** to define player characters
- **Random number generation** for attack and defense rolls
- **Loops** to continue the battle until someone wins
- **Conditional logic** to determine hits and misses

## Getting Started

### Prerequisites

To run this project, you need:

- [Node.js](https://nodejs.org/) installed on your computer

### Running the Battle Simulation

1. Open a terminal or command prompt
2. Navigate to the project directory:
   ```
   cd path/to/battle-sim
   ```
3. Run the battle simulation:
   ```
   node src/battle.js
   ```
4. Watch the battle unfold in your terminal!

### Understanding the Output

The simulation will show:

- Round number
- Player stats at the beginning of each round
- Attack results for both players
- Updated stats after each round
- Eventually, which player wins the battle

## Project Structure

- `src/player.js` - Contains the Player class with properties and methods for characters
- `src/battle.js` - Contains the main battle logic and simulation loop

## Code Explanation

Both files are extensively commented to help beginners understand:

- How classes work in JavaScript
- The difference between `const` and `let` variables
- How to use template literals for string formatting
- How objects interact with each other
- Basic control structures like loops and conditionals

## Challenge: Implement Healing Logic

Ready to enhance the battle simulation? Here's a challenge for you:

### Challenge: Smart Healing

Currently, players only attack each other. Let's make the hero smarter by adding healing logic!

#### Optional Challenge:

Modify the battle simulation so that when a character's health gets low, they have a chance to heal themselves instead of attacking.

#### Requirements:

1. Modify the `battle.js` file to give the hero a chance to heal instead of attack when their health is low
2. Decide for yourself:
   - How low should health be before healing becomes an option?
   - What chance should there be to heal versus attack?
   - How much health should be restored when healing?
   - Should the enemy also have healing abilities, or just the hero?

#### Implementation Tips:

- You can use `Math.random()` to create randomness in your decision-making
- Remember that the `restoreHealth()` method is already available in the Player class
- Think about how to make the battle more interesting and balanced
- Consider adding a message to show when a character chooses to heal

### Bonus Challenge:

After implementing basic healing, try these enhancements:

1. Add a limited number of healing potions (e.g., 3 per battle)
2. Add a "critical hit" system where attacks have a 10% chance to do double damage
3. Create a second Player class like "Mage" with special abilities
