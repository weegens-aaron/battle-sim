/**
 * This file contains the main battle simulation logic.
 * It imports the Player class and runs a battle between two players.
 */

// Import the Player class from the player.js file
// The 'import' statement allows us to use code from other files
// The curly braces {} are used when importing specific items rather than the default export
import { Player } from "./player.js";

/**
 * battle - The main function that runs the battle simulation
 * 
 * This uses an arrow function syntax: () => { ... }
 * Arrow functions are a more concise way to write functions in JavaScript.
 * 
 * The 'export' keyword makes this function available to be imported in other files.
 * 'const' declares a constant variable that cannot be reassigned.
 */
export const battle = () => {
  // Log a message to the console to indicate the battle is starting
  console.log("Battle starting...");

  // Create two Player objects using the 'new' keyword
  // 'const' is used because these variables won't be reassigned
  // Parameters: name, health, attack, defense
  const player1 = new Player("Hero", 100, 10, 5);
  const enemy = new Player("Assface", 100, 8, 5);
  
  // Initialize the round counter
  // 'let' is used because this variable will change (be incremented)
  // Unlike 'const', 'let' variables can be reassigned
  let round = 1;
  
  // The while loop continues as long as both players have health above 0
  // This creates the main battle loop
  while (player1.health > 0 && enemy.health > 0) {
    // Display the current round number using template literals
    // The '\n' creates a new line in the console output
    console.log(`\nRound ${round}`);
    
    // Display each player's current stats
    // JSON.stringify converts a JavaScript object to a string
    // The parameters (null, 2) make the output nicely formatted with 2-space indentation
    console.log(`${player1.name}: ${JSON.stringify(player1, null, 2)}`);
    console.log(`${enemy.name}: ${JSON.stringify(enemy, null, 2)}`);

    // Player 1's turn to attack
    console.log(`\n${player1.name} attacks ${enemy.name}:`);
    // Call the attackTarget method on player1, passing enemy as the target
    player1.attackTarget(enemy);

    // Enemy's turn to attack
    console.log(`\n${enemy.name} attacks ${player1.name}:`);
    // Call the attackTarget method on enemy, passing player1 as the target
    enemy.attackTarget(player1);

    // Display the battle status after both attacks
    // This uses a multi-line template literal with proper indentation
    console.log(
      `\nBattle status after attacks: ${player1.name}: ${JSON.stringify(
        player1,
        null,
        2
      )}`
    );
    console.log(`${enemy.name}: ${JSON.stringify(enemy, null, 2)}`);
    
    // Increment the round counter
    // The '++' operator adds 1 to the variable
    round++;
  }
};

// Call the battle function to start the simulation
// This line executes the battle function we defined above
battle();
