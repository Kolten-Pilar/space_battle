I completed this project based on the following prompt:
-Build a game of battling alien spaceships using Javascript.
Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers.

There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.




A game round would look like this:
You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again ... etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
You lose the game if you are destroyed



Ship Properties
hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
firepower is the amount of damage done to the hull of the target with a successful hit
accuracy is the chance between 0 and 1 that the ship will hit its target
Your spaceship, the USS Assembly should have the following properties:

hull - 20
firepower - 5
accuracy - .7
The alien ships should each have the following ranged properties determined randomly:

hull - between 3and 6
firepower - between 2and 4
accuracy - between .6and .8
You could be battling six alien ships each with unique values.

Example use of accuracy to determine a hit:

if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}


I looked at the cheat codes for a majority of the inspiration which are as follows:
-✅  Make the USS_Assembly object.

✅  Make a single alien ship object.

✅  Simulate a battle between your ship and a single alien ship first.

✅  Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.

✅  Run the method and pass it the alien ship.

✅  Make it so the method reduces the target's hull by the firepower of the USS Assembly.

✅  Make a game object

✅  Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.

✅  Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.

✅  Make a method for the alien ship to attack a target.

✅  At a status console log for the end of the round.

🔴  PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to attack you. Fix this.

✅  Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.

✅  Make many alien ships with a Class. Make each object slightly different . . .

✅  Hull can be a random number between 3 and 6, firepower between 2 and 4, accuracy between 0.6 and 0.8.

✅  Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. Start with 6 ships (the loop should run 6 times).

✅  Try out the game with the first alien ship in the array.

✅  Run the battle with all ships in turn.

✅  Move functions into the game object.

Basically, I followed the instructions and used my resources available to help me with this project.

I first made a single enemy ship and tested the functionality in the console.
I then tested the button functionality with onClick events.
Next, I added the enemy's turn to attack the player if the player either missed their shot or the enemy had hull points remaining.
I then had to make 6 enemies all randomly generated, so I had to make an empty array, create a loop creating random enemies with random attribute points, then I pushed the newly created enemies into the array. To take an enemy out of the array and make it the active enemy the player is engaging, we have to .shift and assign it to a new variable being newOpponent. I also started working on theGame object.
I had to make a function that would allow the player to engage the enemy. In the function, it checks on the enemy's hull points remaining and if there are still enemy ships. When the enemy is destroyed, it .shift()'s a new enemy from the array into the newOpponent variable. I also added prompts for the player to either attack or retreat. 
Originally I started to write out the game's logic into each function, making WET code. However, I realized if I just wrote out the code in seperate functions and then called those functions in certain parts it would be a lot more DRY 
I updated each turn the enemies stats and later the players stats and how many ships were left. I also left the console.log() but added the same code but for an alert. I added theGame to the start button onClick. I also added win/lose states.

Overall, I had some difficulty with this project. Mainly with the loop and array since I shyed away from those in my previous project. Google helps so much, but the real learning is when you apply what you research from google into your projects and test/debug them. I have improved slightly at recognizing when I am writing WET code.