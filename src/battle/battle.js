import { Player } from "./player.js";

export const battle = () => {
  console.log("Battle starting...");

  // Create two players
  const player1 = new Player("Player 1", 100, 10);
  const enemy = new Player("Enemy", 100, 8);

  // while a character is alive, continue the battle
  while (player1.health > 0 && enemy.health > 0) {
    console.log("Player 1:", player1);
    console.log("Enemy:", enemy);

    console.log("\nPlayer 1 attacks Enemy:");
    player1.attackTarget(enemy);

    console.log("\nEnemy attacks Player 1:");
    enemy.attackTarget(player1);

    console.log("\nBattle status after attacks:");
    console.log("Player 1 health:", player1.health);
    console.log("Enemy health:", enemy.health);
  }
};

battle();
