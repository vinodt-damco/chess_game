Project: Chess POC 

Description: It's a simple game in which two players can participate. The rules of the game are as follows:
	There are two clocks, one for each player.
	Each clock has one button.
	By pressing one player's button it starts the other players clock and stop first players if it’s counting down (the opposite of this is also true).
	Each clock starts at 4 minutes and counts down until one of them reaches 0.
	When the application loads, no clocks will be active (each clock shows 4 minutes).
	When a clock reaches 0, each clock reset back to 4 minutes and award's the game to the other player.
	There is a reset button that resets both clocks back to 4 minutes and set the buttons back to their original state.

Technical Details:
The project is made in vanilla JavaScript. ES6 also has not been used.
To start the timer for a player initClock() method has been used which is a generic method and can be used in any project.
The initClock method internally a method called getRemainingTime() which is also a generic method and can be used elsewhere.
When the timer expires for a players showWinner() function runs and awards the other players instead of that we coulld have done anything.