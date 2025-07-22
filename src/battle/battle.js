import { Player } from "./player.js";

export const battle = () => {
  console.log("Battle starting...");

  const player1 = new Player("Hero", 100, 10, 5);
  const enemy = new Player("Assface", 100, 8, 5);
  let round = 1;
  while (player1.health > 0 && enemy.health > 0) {
    console.log(`\nRound ${round}`);
    console.log(`${player1.name}: ${JSON.stringify(player1, null, 2)}`);
    console.log(`${enemy.name}: ${JSON.stringify(enemy, null, 2)}`);

    console.log(`\n${player1.name} attacks ${enemy.name}:`);
    player1.attackTarget(enemy);

    console.log(`\n${enemy.name} attacks ${player1.name}:`);
    enemy.attackTarget(player1);

    console.log(
      `\nBattle status after attacks: ${player1.name}: ${JSON.stringify(
        player1,
        null,
        2
      )}`
    );
    console.log(`${enemy.name}: ${JSON.stringify(enemy, null, 2)}`);
    round++;
  }
};

battle();
