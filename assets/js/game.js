var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(playerName, playerHealth, playerAttack, enemyName, enemyHealth, enemyAttack)
var fight = function() {
  //Alert the player they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Ask if the player wants to skip the fight (prompt?)

  //when to ask? (before fight() function)

  //skip fight code if player chooses "skip" (use if/else statement)

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
  enemyHealth = enemyHealth - playerAttack;
  //Log a resulting message so that we know that it worked
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  //check enemy's health  
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
  }
  //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the playerHealth variable
  playerHealth = playerHealth - enemyAttack;  
  //Log a resulting message to the console so that we know it worked
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
  );
  //Check player's health
  if (playerHealth <=0) {
    window.alert(playerName + " has died!");
  }  
  else {
    window.alert(playerName + " still has " + playerHealth + " health left!");
  }
}

fight();