/*Game Start*/

var startGame = function() {
  //reset player stats
  playerInfo.reset();
  //for loop created to fight enemy robots one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    //if player survuves move to the next opponent
    if (playerInfo.health > 0) {
      //tells player which round it is
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
      //picks new enemy pulled from enemyInfo array
      var pickedEnemyObject = enemyInfo[i];
      //set enemy health
      pickedEnemyObject.health = randomNumber(40, 60);
      //pass pickedEnemyObject object variable's value into fight() function to assume the enemy parameter
      fight(pickedEnemyObject);
      //if player is not alive, break loop and run endGame() function
    } else {
      break;
    }
  } 
//after loop, the player has lost all health or there are no more enemies
  endGame();
};  

//function to end entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!")
  if (playerInfo.health > 0) {
    window.alert("Great job, you survived the game! You now have a score of " 
    + playerInfo.money + ".");
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

var fightOrSkip = function() {
  //ask player if they would like to fight or skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  //conditional recursive call
  if(promptFight === "" || promptFight === null || !isNaN(promptFight)) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you would like to quit?");

    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight.");
      playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);
      return true;
    }
  }
  return false;
}

var fight = function(enemy){
  //repeat and execute as long as enemy robot's health include all the fight() function
  while(enemy.health > 0 && playerInfo.health > 0){ 
    //if player decides to skip(true boolean value to fightOrSkip function) then the loop break;(s) 
    if (fightOrSkip()) {
      break;
     }
    //Subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    //Log a resulting message so that we know that it worked
    console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    //check enemy's health  
    if (enemy.health <= 0) {
     window.alert(enemy.name + " has died! ");
      //award player for winning
      playerInfo.money = playerInfo.money + 20;
      //ask if player wants to visit store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
      //if yes, recall shop() function
      if (storeConfirm) {
      shop();
    }//Since enemy is dead we break the while loop
    break;
  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

    //Subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the playerInfo.health variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);  
    //Log a resulting message to the console so that we know it worked
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining. "
    );
    //Check player's health
    if (playerInfo.health <=0) {
     window.alert(playerInfo.name + " has died!");
     break;
    } else {
     window.alert(playerInfo.name + " still has " + playerInfo.health + " health left!");
    }  
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
      if (playerInfo.money >= 7) {
      playerInfo.refillHealth();
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "UPGRADE":
    case "upgrade":
      if (playerInfo.money >= 7) {
      playerInfo.upgradeAttack();
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

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null){
    name = prompt("What is your robots name?")
  }
  console.log(`"Your robot's name is "` + name);
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    window.alert("Upgrading players attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
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