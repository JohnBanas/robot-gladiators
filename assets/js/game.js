var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//Alert the player they are starting the round
window.alert("Welcome to Robot Gladiators!");
console.log(playerName, playerHealth, playerAttack, enemyNames, enemyHealth, enemyAttack)
var fight = function(enemyName){

  //repeat and execute as long as enemy robot's health include all the fight() function
  while(enemyHealth > 0 && playerHealth > 0){

  //Ask if the player wants to skip the fight (prompt?)
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
  console.log(promptFight);
  
  if (promptFight === 'fight' || promptFight === "FIGHT") {
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message so that we know that it worked
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //check enemy's health  
    if (enemyHealth <= 0) {
     window.alert(enemyName + " has died! ");
     break;
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
     break;
    }  
    else {
     window.alert(playerName + " still has " + playerHealth + " health left!");
    }
  //if player chooses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true) leave the fight
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    //subtract playerMoney for skipping
    playerMoney = playerMoney - 2;
    console.log(playerMoney);
    }
    //if no (false), ask question again by running fight() again
    else{
      fight();
    }
    
    } else {
    window.alert("You need to choose a valid option. Try again!");
    }
  }
}
//Game states

//"WIN" - Player's robot has defeated all enemy-robots
// *Fight all the enemy-robots
// *Defeat each enemy-robot
//"LOSE" - Player's robot's health is zero or less
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  //call fight function with enemy robot
  //create fresh health for each new enemy robot
  enemyHealth = 50;
  fight(pickedEnemyName);
}