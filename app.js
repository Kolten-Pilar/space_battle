// create ship class
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
}

// create function to pick random number between given numbers in whole numbers
const randomWholeNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create function to pick random number between given numbers in decimal
const randomDecimalNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}

// human spaceship subclass
// let playerShip = new Ship ('USS Assembly', 20, 5, 0.7)
class humanShip extends Ship {
  constructor (name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy)
  }  
  // create attack method
  attack(target) {
    if (Math.random() < this.accuracy) {
      console.log('We damaged the enemy!');
      alert(`We damaged the enemy!`);
      target.hull -= this.firepower;
      if (target.hull <= 0) {
        console.log('We got them! Enemy ship has been destroyed');
        alert('We got them! Enemy ship has been destroyed');
      } else {
        console.log(`Hit! The enemy ship has ${target.hull} hull integrity remaining`);
        alert(`Hit! The enemy ship has ${target.hull} hull integrity remaining`);
      }
    } else {
      console.log('Your attack missed!');
      alert('Your attack missed!');
    }
  }
  retreat() {
    console.log(`You have survived the battle and retreated, but at what cost? AT WHAT COST???`);
    alert(`You have survived the battle and retreated, but at what cost? AT WHAT COST???`);
  }
}

// alien spaceship subclass
// let alienShip = new Ship ('Bad Boy', randomWholeNumber(3, 6),randomWholeNumber(2, 4), randomDecimalNumber(0.6, 0.8))

class alienShip {
  constructor (hull, firepower, accuracy) {
     this.hull = hull;
     this.firepower = firepower;
     this.accuracy = accuracy;
  } 
  // create attack method
  attack(player) {
    if (Math.random() < this.accuracy) {
      console.log('You have been hit!');
      alert('You have been hit!');
      player.hull -= this.firepower;
      if (player.hull <= 0) {
        console.log('We are done for. The ship is destroyed!');
        alert('We are done for. The ship is destroyed!');
      } else {
        console.log(`Damaged received! Our ship has ${player.hull} hull integrity remaining`);
        alert(`Damaged received! Our ship has ${player.hull} hull integrity remaining`);
      }
    } else {
      console.log('They missed!');
      alert('They missed!');
    }
  }
}


// make instance of human class

let playerShip = new humanShip ('USS Assembly', 20, 5, 0.7)

// make instance of alien class

// let foreignShip = new alienShip ('Bad Boy', randomWholeNumber(3, 6),randomWholeNumber(2, 4), randomDecimalNumber(0.6, 0.8))

// playerShip.attack(foreignShip)
// foreignShip.attack(playerShip)

// create empty array to manipulate multiple enemy ships
let foreignShips = [];

// loop to randomly instantiate enemy ships
const newEnemies = () => {
  for(let i = 0; i <= 6; i++){
    let hull = randomWholeNumber(3, 6);
    let firepower = randomWholeNumber(2, 4);
    let accuracy = randomDecimalNumber(0.6, 0.8);
    let enemy = new alienShip(hull, firepower, accuracy);
    foreignShips.push(enemy);
  }
}

// make function for engaging enemy ship
const engageEnemy = () => {
    playerShip.attack(newOpponent);
    if (newOpponent.hull <= 0 && foreignShips.length > 0) {
      newOpponent = foreignShips.shift();
      playerChoice();
    } else if (newOpponent.hull > 0) {
      newOpponent.attack(playerShip);
      if (playerShip.hull > 0){
        playerChoice()
      } else {
        console.log(`Our ship is about to explode. We have prepared the escape pod. We must abandon ship!!`);
        alert(`Our ship is about to explode. We have prepared the escape pod. We must abandon ship!!`);
      }
    }
};

// function for showing prompts for player
const playerChoice = () => {
  if (foreignShips.length > 0) {
  console.log(`An enemy is engaging. Their stats are: Hull-${newOpponent.hull}, firepower-${newOpponent.firepower}, accuracy-${newOpponent.accuracy}. There are ${foreignShips.length} ships left`);
  alert(`An enemy is engaging. Their stats are: Hull-${newOpponent.hull}, firepower-${newOpponent.firepower}, accuracy-${newOpponent.accuracy}. There are ${foreignShips.length} ship(s) left`);
  let myChoice = prompt('Captain, should we attack or retreat?');
  if (myChoice === 'attack') {
    engageEnemy();
  } else if (myChoice === 'retreat') {
    playerShip.retreat();
  } else {
    alert('Comms signal interference. Say again?');
    playerChoice();
  }
 } else {
  console.log(`We eradicated all enemies. Time to celebrate. Returning to base.`);
  alert(`We eradicated all enemies. Time to celebrate. Returning to base.`);
  let newGame = prompt('New Game! Yes or No?');
  if (newGame == 'yes') {
   theGame();
   } else {
   alert(`Fine, I didn't want to play anyways.`);
    }  
  }
}

// game object
const theGame = () => {
  // resets player ship values on new game
  playerShip = new humanShip ('USS Assembly', 20, 5, 0.7)
  newEnemies();
  newOpponent = foreignShips.shift();
  console.log('You must defend Earth from the alien intruders.');
  alert('You must defend Earth from the alien intruders.');
  playerChoice();
}


// theGame()