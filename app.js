// create ship class
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
}

// player spaceship
let playerShip = new Ship ('USS Assembly', 20, 5, 0.7)

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

// alien spaceship
let alienShip = new Ship ('Bad Boy', randomWholeNumber(3, 6),randomWholeNumber(2, 4), randomDecimalNumber(0.6, 0.8), )


