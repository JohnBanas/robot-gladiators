var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(playerName, playerHealth, playerAttack, enemyNames, enemyHealth, enemyAttack)
var fight = function(enemyName){

  //repeat and execute as long as enemy robot's health include all the fight() function
  while(enemyHealth > 0 && playerHealth > 0){

  //Ask if the player wants to skip the fight (prompt)
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
  
  //if player chooses to skip
  if (promptFight === 'skip' || promptFight === 'SKIP') {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  //if yes (true) leave the fight
  if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
  //subtract playerMoney for skipping
  playerMoney = Math.max(0, playerMoney - 10);
  console.log("playerMoney", playerMoney)
  break;
  }
}
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    //Log a resulting message so that we know that it worked
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //check enemy's health  
    if (enemyHealth <= 0) {
     window.alert(enemyName + " has died! ");
      //award player for winning
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the playerHealth variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);  
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
  } 
};
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemyName);
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        //ask player to shop before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
        shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game over!");
    }
  }
  endGame();
};

//function to end entire game
var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job, you survived the game! You now have a score of " 
    + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

//shop function
var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      break;
      } else {
        window.alert("You don't have enough money!");
      }
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
      window.alert("Upgrading players attack by 6 for 7 dollars.");
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};


//start game when the page loads
startGame();

//Game states

//"WIN" - Player's robot has defeated all enemy-robots
// *Fight all the enemy-robots
// *Defeat each enemy-robot
//"LOSE" - Player's robot's health is zero or less

  //call fight function with enemy robot
  //create fresh health for each new enemy robot

//Need to create a function for game logic (wrap in startGame())
//If player is defeated or there are no more enemies, create endGame() function that:
  //*alerts the player's stats
  //*Asks the player if they want to play again
  //*If true, call the startGame() to restart game

//Need too create option after defeat/skip an enemy (with more enemies to fight) to:
  //Ask the player if they want to "shop"
  //If no, continue 
  //If yes, call shop() function
  //In shop function:
    //*refill health option
    //*upgrade attack option
    //*or leave shop
  //If upgrade/refill subtract money from player and add attack or health
  //If leave, alert goodbye and end function
  //any other invalid command will call shop() again